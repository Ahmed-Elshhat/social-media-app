import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import personImg from "../../images/person-img.png";
import "./Header.scss";
import { useAppSelector } from "../../app/hooks";

function Header() {
  const windowSize = useAppSelector((state) => state.window.windowSize);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const input = useRef<HTMLInputElement | null>(null);
  const searchContainer = useRef<HTMLDivElement | null>(null);
  const resultsSearch = useRef<HTMLDivElement | null>(null);
  const count = useRef<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (windowSize < 900 && windowSize > 500) {
      document.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          !target?.classList?.contains("search-item") &&
          input.current !== null &&
          searchContainer.current !== null
        ) {
          input.current.style.display = "none";
          searchContainer.current.style.minWidth = "55px";
          setSearchOpen(false);
        }
      });
    }
  }, [windowSize]);

  // Search Function
  function search() {
    console.log("search");
  }

  // handleOnKeyUp
  function handleOnKeyUp() {
    if (resultsSearch.current) {
      const Height = resultsSearch.current?.scrollHeight;
      if (searchInput) {
        count.current++;
        resultsSearch.current.style.height = `${searchInput.length === 1 && count.current === 1 ? Height + 37 : Height}px`;
        resultsSearch.current.style.paddingTop = `37px`;
      } else {
        count.current = 0;
        resultsSearch.current.style.height = "0px";
        resultsSearch.current.style.paddingTop = `0px`;
      }
    }
  }
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="/friends">
                <i className="fa-solid fa-user-group"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="/watched">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 50 50"
                >
                  <path
                    className="path"
                    fill="#ffffff"
                    d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"
                  ></path>
                </svg>
              </NavLink>
            </li>

            <li>
              <NavLink to="/notifications">
                <i className="fa-regular fa-bell"></i>
                <div>9+</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/chat">
                <i className="fa-regular fa-comment"></i>
                <div>6</div>
              </NavLink>
            </li>

            <li>
              <Link to="/profile">
                <div className="image">
                  <img src={personImg} alt="person-img" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="search">
          <div
            ref={searchContainer}
            className="search-container"
            style={{
              minWidth:
                windowSize < 900 && windowSize > 500
                  ? searchOpen
                    ? "261.25px"
                    : "55px"
                  : windowSize <= 500
                  ? "55px"
                  : "261.25px",
            }}
          >
            <input
              ref={input}
              type="text"
              value={searchInput}
              placeholder="Search People"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyUp={handleOnKeyUp}
              className="search-item"
              style={{
                display:
                  windowSize < 900 && windowSize > 500
                    ? searchOpen
                      ? "block"
                      : "none"
                    : windowSize <= 500
                    ? "none"
                    : "block",
              }}
            />
            <i
              className="fa-solid fa-magnifying-glass search-item"
              onClick={() =>
                windowSize < 900 && windowSize > 500
                  ? searchOpen
                    ? search()
                    : setSearchOpen(true)
                  : windowSize <= 500
                  ? navigate("/search")
                  : search()
              }
            ></i>
          </div>

          <div ref={resultsSearch} className="results-search">
            <div className="results-search-item">
              <div className="image">
                <img src={personImg} alt="" />
              </div>
              <span className="name">Ahmed</span>
            </div>

            <div className="results-search-item">
              <div className="image">
                <img src={personImg} alt="" />
              </div>
              <span className="name">Ahmed</span>
            </div>

            <div className="results-search-item">
              <div className="image">
                <img src={personImg} alt="" />
              </div>
              <span className="name">Ahmed</span>
            </div>

            <div className="results-search-item">
              <div className="image">
                <img src={personImg} alt="" />
              </div>
              <span className="name">Ahmed</span>
            </div>

            <div className="results-search-item">
              <div className="image">
                <img src={personImg} alt="" />
              </div>
              <span className="name">Ahmed</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
