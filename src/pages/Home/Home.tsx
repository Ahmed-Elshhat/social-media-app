import personImg from "../../images/person-img.png";
import friendImg from "../../images/person-img.png";
import Status from "../../components/Status/Status";
import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/Posts/Posts";
import "./Home.scss";

function Home() {
  return (
    <section className="Home">
      <div className="recent-activity">
        <header>
          <h3>recent activity</h3>
          <button>see all</button>
        </header>

        <div className="recent-activity-cards">
          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>

          <div className="recent-activity-card">
            <div className="content">
              <div className="image">
                <img src={personImg} alt="person img" />
              </div>

              <div className="info">
                <h4>george jose</h4>
                <p>
                  Followed on you<span>. 3 min ago</span>
                </p>
              </div>
            </div>

            <div className="btns">
              <button>Remove</button>
              <button>Follow Back</button>
            </div>
          </div>
        </div>
      </div>

      <div className="center">
        <Status />

        <CreatePost />

        <Posts />
      </div>

      <div className="Friends-section">
        <header>
          <h2>Friends</h2>
        </header>

        <div className="friends">
          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>

          <div className="friend">
            <div className="image">
              <img src={friendImg} alt="person-img" />
            </div>
            <div className="info">
              <div className="name-and-time">
                <h4>ahmed</h4>
                <span>54 second</span>
              </div>
              <p className="message">Nice Picture 😂</p>
            </div>
          </div>
        </div>

        {/* <div className="see-all">
          <button>see all</button>
        </div> */}
      </div>
    </section>
  );
}

export default Home;
