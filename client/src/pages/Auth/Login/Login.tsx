import { useState, useRef, FormEvent, ChangeEvent, useEffect } from "react";
import LoginImage from "../../../images/login-image.png";
import Logo from "../../../images/logo.png";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, LOGIN, USERS } from "../../../components/Api/Endpointes";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassStatus, setShowPassStatus] = useState<boolean>(false);

  // Validation state
  const [validation, setValidation] = useState({
    isValid: true,
    errors: {
      email: "",
      password: "",
    },
  });

  // Language page status
  const lang: string = "en";

  const checkbox = useRef<HTMLInputElement | null>(null);

  // Prevents the effect from running at the first load
  const count = useRef(0);

  useEffect(() => {
    if (count.current !== 0) {
      validateForm();
    }
  }, [form.password, form.email]);

  // Handle click for change checkbox status
  const handleIconClick = () => {
    if (checkbox.current) {
      checkbox.current.checked = !checkbox.current.checked;
    }
  };

  // Handle changes
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Validate form
  function validateForm() {
    let emailError = "";
    let passwordError = "";

    const emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    if (!emailRegex.test(form.email)) {
      emailError = "Email is not valid";
    }

    if (form.password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }

    if (emailError || passwordError) {
      setValidation({
        isValid: false,
        errors: {
          email: emailError,
          password: passwordError,
        },
      });
      return false;
    }

    setValidation({ isValid: true, errors: { email: "", password: "" } });
    return true;
  }

  // Handle submit
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    count.current = 1;

    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/${USERS}/${LOGIN}`, {
        email: form.email,
        password: form.password,
      });
      console.log(res.data);
    } catch (err) {
      setValidation({
        isValid: false,
        errors: {
          email: "Invalid email or password",
          password: "Invalid email or password",
        },
      });
      console.log(err);
    }
  }

  return (
    <section
      className="login"
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="login-content-container">
          <div className="login-content">
            <div className="form-side">
              <form onSubmit={handleSubmit}>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={handleChange}
                  />

                  {validation.errors.email && (
                    <p className="error">* {validation.errors.email}</p>
                  )}
                </div>

                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassStatus ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    style={{
                      padding:
                        lang === "ar"
                          ? "5px 20px 5px 40px"
                          : "5px 40px 5px 20px",
                    }}
                    onChange={handleChange}
                  />

                  {showPassStatus ? (
                    <i
                      className="fa-sharp fa-solid fa-eye"
                      onClick={() => setShowPassStatus(false)}
                      style={{ right: lang === "ar" ? "90%" : "2%" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-eye-slash"
                      onClick={() => setShowPassStatus(true)}
                      style={{ right: lang === "ar" ? "90%" : "2%" }}
                    ></i>
                  )}

                  {validation.errors.password && (
                      <p className="error">* {validation.errors.password}</p>
                    )}
                </div>

                <div className="check-and-forgot">
                  <div className="checkbox">
                    <input type="checkbox" id="remember-me" ref={checkbox} />
                    <span
                      onClick={handleIconClick}
                      style={{ left: lang === "ar" ? "90%" : "2px" }}
                    ></span>

                    <i
                      className="fa-solid fa-check"
                      onClick={handleIconClick}
                      style={{ left: lang === "ar" ? "91%" : "4px" }}
                    ></i>

                    <label htmlFor="remember-me" className="cursor-pointer">
                      Remember me
                    </label>
                  </div>

                  <span>forgot password</span>
                </div>

                <div className="form-btns">
                  <button onSubmit={handleSubmit}>sign in</button>
                  <button>sign in with google</button>
                </div>

                <h3>or login by</h3>

                <button className="login-google">g</button>
              </form>

              <div className="signup-btn">
                Don&#39;t have account?
                <Link to="/register">sign up</Link>
              </div>
            </div>

            <div className="img-side">
              <img src={LoginImage} alt="Login image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
