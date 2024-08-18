import { FormEvent, useState, useRef, useEffect } from "react";
import SignUpImage from "../../../images/login-image.png";
import Logo from "../../../images/logo.png";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, SIGN_UP, USERS } from "../../../components/Api/Endpointes";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const count = useRef(0);

  const [showPassStatus, setShowPassStatus] = useState<boolean>(false);
  const lang: string = "en";

  useEffect(() => {
    if (count.current !== 0) {
      validateForm();
    }
  }, [form]);

  // Handle Changes
  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Validate Form
  function validateForm() {
    let firstNameError = "";
    let lastNameError = "";
    let userNameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordConfirmError = "";

    if (form.firstName.length < 3) {
      firstNameError = "must be at least 3 characters";
    }

    if (form.lastName.length < 3) {
      lastNameError = "must be at least 3 characters";
    }

    if (form.userName.length < 3) {
      userNameError = "Username must be at least 3 characters";
    }

    const emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    if (!emailRegex.test(form.email)) {
      emailError = "Email is not valid";
    }

    if (form.password.length < 8) {
      passwordError = "must be at least 8 characters";
    }

    if (form.password !== form.passwordConfirm) {
      passwordConfirmError = "Passwords do not match";
    }

    if (
      firstNameError ||
      lastNameError ||
      userNameError ||
      emailError ||
      passwordError ||
      passwordConfirmError
    ) {
      setError({
        firstName: firstNameError,
        lastName: lastNameError,
        userName: userNameError,
        email: emailError,
        password: passwordError,
        passwordConfirm: passwordConfirmError,
      });
      return false;
    }

    setError({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
    return true;
  }

  // Handle Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    count.current = 1;

    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/${USERS}/${SIGN_UP}`, {
        firstName: form.firstName,
        lastName: form.lastName,
        userName: form.userName,
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm,
      });

      console.log(res.data);
    } catch (err) {
      setError({
        ...error,
        email: "Email already taken",
      });
      console.log(err);
    }
  };

  return (
    <section
      className="register"
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="register-content-container">
          <div className="register-content">
            <div className="form-side">
              <form onSubmit={handleSubmit}>
                <div className="first-and-last-name inputs">
                  <div className="first-name">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      autoComplete="off"
                      onChange={handleChanges}
                    />
                    {error.firstName && (
                      <p className="error">* {error.firstName}</p>
                    )}
                  </div>

                  <div className="last-name inputs">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      autoComplete="off"
                      onChange={handleChanges}
                    />
                    {error.lastName && (
                      <p className="error">* {error.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="username inputs">
                  <label htmlFor="userName">Username</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={handleChanges}
                  />
                  {error.userName && (
                    <p className="error">* {error.userName}</p>
                  )}
                </div>

                <div className="email inputs">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={handleChanges}
                  />
                  {error.email && <p className="error">* {error.email}</p>}
                </div>

                <div className="pass-and-confirm-pass inputs">
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassStatus ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={handleChanges}
                      style={{
                        padding:
                          lang === "ar"
                            ? "5px 20px 5px 40px"
                            : "5px 40px 5px 20px",
                      }}
                    />
                    {error.password && (
                      <p className="error">* {error.password}</p>
                    )}
                    {showPassStatus ? (
                      <i
                        className="fa-sharp fa-solid fa-eye"
                        onClick={() => setShowPassStatus(false)}
                        style={{ right: lang === "ar" ? "86%" : "3%" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-eye-slash"
                        onClick={() => setShowPassStatus(true)}
                        style={{ right: lang === "ar" ? "86%" : "3%" }}
                      ></i>
                    )}
                  </div>

                  <div className="confirm-pass">
                    <label htmlFor="password-confirm">Password Confirm</label>
                    <input
                      type={showPassStatus ? "text" : "password"}
                      name="passwordConfirm"
                      id="password-confirm"
                      placeholder="Password Confirm"
                      onChange={handleChanges}
                      style={{
                        padding:
                          lang === "ar"
                            ? "5px 20px 5px 40px"
                            : "5px 40px 5px 20px",
                      }}
                    />
                    {error.passwordConfirm && (
                      <p className="error">* {error.passwordConfirm}</p>
                    )}
                    {showPassStatus ? (
                      <i
                        className="fa-sharp fa-solid fa-eye"
                        onClick={() => setShowPassStatus(false)}
                        style={{ right: lang === "ar" ? "86%" : "3%" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-eye-slash"
                        onClick={() => setShowPassStatus(true)}
                        style={{ right: lang === "ar" ? "86%" : "3%" }}
                      ></i>
                    )}
                  </div>
                </div>

                <div className="form-btns">
                  <button type="submit" onSubmit={handleSubmit}>
                    sign UP
                  </button>
                  <button>sign UP with google</button>
                </div>

                <h3>or register by</h3>

                <button className="register-google">g</button>
              </form>

              <div className="login-btn">
                Already have an account?
                <Link to="/login">Login</Link>
              </div>
            </div>

            <div className="img-side">
              <img src={SignUpImage} alt="register image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
