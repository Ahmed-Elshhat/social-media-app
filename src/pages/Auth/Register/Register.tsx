import { FormEvent, useState } from "react";
import SignUpImage from "../../../images/login-image.png";
import Logo from "../../../images/logo.png";
import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  const [showPassStatus, setShowPassStatus] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
              <div className="username">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  autoComplete="off"
                />
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>

              <div className="password">
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  type={showPassStatus ? "text" : "password"}
                  id="password"
                  placeholder="Password"
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
                <label htmlFor="confirm-pass">Confirm Password</label>
                <input
                  type={showPassStatus ? "text" : "password"}
                  id="confirm-pass"
                  placeholder="Confirm Password"
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

              <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  autoComplete="off"
                />
              </div>

              <div className="form-btns">
                <button>sign UP</button>
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
