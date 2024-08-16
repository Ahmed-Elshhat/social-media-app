import { FormEvent, useState } from "react";
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
  const [showPassStatus, setShowPassStatus] = useState<boolean>(false);

  // Handle Changes
  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
      console.log(err);
    }
  };

  //     <section className="signup h-screen">
  return (
    <section className="register">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="register-content">
          <div className="form-side">
            <h2>welcome back</h2>
            <form onSubmit={handleSubmit}>
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
              </div>

              <div className="last-name">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last-name"
                  autoComplete="off"
                  onChange={handleChanges}
                />
              </div>

              <div className="username">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Username"
                  autoComplete="off"
                  onChange={handleChanges}
                />
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={handleChanges}
                />
              </div>

              <div className="password">
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  type={showPassStatus ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChanges}
                />

                {showPassStatus ? (
                  <i
                    className="fa-sharp fa-solid fa-eye"
                    onClick={() => setShowPassStatus(false)}
                  ></i>
                ) : (
                  <i
                    className="fa-sharp fa-solid fa-eye-slash"
                    onClick={() => setShowPassStatus(true)}
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
                />

                {showPassStatus ? (
                  <i
                    className="fa-sharp fa-solid fa-eye"
                    onClick={() => setShowPassStatus(false)}
                  ></i>
                ) : (
                  <i
                    className="fa-sharp fa-solid fa-eye-slash"
                    onClick={() => setShowPassStatus(true)}
                  ></i>
                )}
              </div>

              <div className="form-btns">
                <button type="submit" onSubmit={handleSubmit}>
                  sign UP
                </button>
                <button>sign UP with google</button>
              </div>

              <h3>or signup by</h3>

              <button className="register-google">g</button>
            </form>

            <div className="register-btn">
              Don&#39;t have account?
              <Link to="/register">register</Link>
            </div>
          </div>

          <div className="img-side">
            <img src={SignUpImage} alt="signup image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
