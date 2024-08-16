import personImg from "../../images/person-img.png";
import postImg from "../../images/post-image.png";
import "./Post.scss";

function Post() {
  return (
    <div className="post">
      <header>
        <div className="post-creator-info">
          <div className="image">
            <img src={personImg} alt="person-img" />
          </div>

          <div className="name-and-time">
            <h4>Ahmed Mohamed</h4>
            <span>1 hours ago</span>
          </div>
        </div>

        <div className="posts-setting">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <ul>
            <li>delete Post</li>
            <li>update Post</li>
          </ul>
        </div>
      </header>

      <p className="description">
        in the sky of the dream i see a pink cloud it brings peace and hppiness
        To my weary heart i wish i could fl...
      </p>

      <div className="post-image">
        <img src={postImg} alt="" />
      </div>

      <div className="activity">
        <ul>
          <li>
            <i className="fa-solid fa-heart"></i>
            <span>162K</span>
          </li>
          <li>
            <i className="fa-solid fa-comment"></i>
            <span>32K</span>
          </li>
          <li>
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            <span>32K</span>
          </li>
        </ul>

        <span>
          <i className="fa-solid fa-bookmark"></i>
        </span>
      </div>
    </div>
  );
}

export default Post;
