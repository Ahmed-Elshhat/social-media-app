import { useState, useRef, FormEvent, ChangeEvent } from "react";
import LoginImage from "../../../images/login-image.png";
import Logo from "../../../images/logo.png";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import { BASE_URL, LOGIN, USERS } from "../../../components/Api/Endpointes";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassStatus, setShowPassStatus] = useState<boolean>(false);
  const checkbox = useRef<HTMLInputElement | null>(null);
  const lang: string = "en";

  const handleIconClick = () => {
    if (checkbox.current) {
      checkbox.current.checked = !checkbox.current.checked;
    }
  };

  // Handle Changes
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submit
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/login"/* `${BASE_URL}/${USERS}/${LOGIN}` */, {
        email: form.email,
        password: form.password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="login"  style={{direction: lang === "ar"? "rtl" : "ltr"}}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div className="login-content-container">
          <div className="login-content">
            <div className="form-side">
              {/* <h2>
              welcome back
            </h2> */}

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
