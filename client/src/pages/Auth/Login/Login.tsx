import { useState, useRef, FormEvent } from "react";
import LoginImage from "../../../images/login-image.png";
import Logo from "../../../images/logo.png";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const checkIcon = useRef<HTMLElement |null>(null);
  const checkbox = useRef<HTMLInputElement |null>(null);
  const [showPassStatus, setShowPassStatus] = useState<boolean>(false);
  const handleIconClick = () => {
    if (checkbox.current) {
      checkbox.current.checked = !checkbox.current.checked;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  //     <section className="login h-screen">
  return (
    <section className="login">
      <div className="container">
        <Link
          to="/"
        >
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="login-content">
          <div className="form-side">
            <h2>
              welcome back
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="email">
                <label htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>

              <div className="password">
                <label htmlFor="password">
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

              <div className="check-and-forgot">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="remember-me"
                    ref={checkbox}
                  />
                  <span
                    ref={checkIcon}
                    onClick={handleIconClick}
                  ></span>

                  <i
                    className="fa-solid fa-check"
                    onClick={handleIconClick}
                  ></i>

                  <label htmlFor="remember-me" className="cursor-pointer">
                    Remember me
                  </label>
                </div>

                <span>forgot password</span>
              </div>

              <div className="form-btns">
                <button
                  onSubmit={handleSubmit}
                >
                  sign in
                </button>
                <button>
                  sign in with google
                </button>
              </div>

              <h3>or login by</h3>

              <button className="login-google">g</button>
            </form>

            <div className="signup-btn">
              Don&#39;t have account?
              <Link to="/register">
                sign up
              </Link>
            </div>
          </div>

          <div className="img-side">
            <img src={LoginImage} alt="Login image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
