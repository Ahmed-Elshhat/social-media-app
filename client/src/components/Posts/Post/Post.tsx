import { useEffect, useRef, useState } from "react";
import {PostProps} from "../../../Types/app"
import personImg from "../../../images/person-img.png";
import postImg from "../../../images/post-image.png";
import "./Post.scss";

function Post({ index, indexSettingOpen, setIndexSettingOpen, postId }: PostProps) {
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
  const [activities, setActivities] = useState({
    like: false,
    savePost: false,
  });

  const postRef = useRef<HTMLDivElement | null>(null);
  const render = useRef<number>(0);

  useEffect(() => {
    const handleClickOutside = (/* e: MouseEvent */) => {
      if (
        postRef.current /*  && !postRef.current.contains(e.target as Node) */
      ) {
        // console.log(postRef.current.contains(e.target as Node));
        setIsSettingOpen(false);
        setIndexSettingOpen(null);
      }
    };

    if (isSettingOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [indexSettingOpen, setIndexSettingOpen, isSettingOpen]);

  useEffect(() => {
    setIsSettingOpen(index === indexSettingOpen);
  }, [index, indexSettingOpen]);

  useEffect(() => {
    if (render.current > 1) {
      console.log(activities.like);
      console.log(activities.savePost);
      console.log(postId)
      console.log("\n\n\n\n\n\n\n\n\n\n");
    }
    render.current++;
  }, [activities.like, activities.savePost, postId]);

  return (
    <div className="post" ref={postRef}>
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
          <button
            className="none"
            onClick={(e) => {
              e.stopPropagation(); // منع النقر من الانتشار إلى الوثيقة
              if (index === indexSettingOpen) {
                setIsSettingOpen(!isSettingOpen);
              } else {
                setIndexSettingOpen(index);
              }
            }}
          >
            <i className="fa-solid fa-ellipsis-vertical none"></i>
          </button>
          {isSettingOpen && (
            <div className="list-container">
              <ul>
                <li onClick={() => console.log("Delete Post")}>delete Post</li>
                <li>update Post</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <p className="description">
        in the sky of the dream i see a pink cloud it brings peace and happiness
        To my weary heart i wish i could fl...
      </p>

      <div className="post-image">
        <img src={postImg} alt="" />
      </div>

      <div className="activity">
        <ul>
          <li>
            <i
              className="fa-solid fa-heart"
              onClick={() => {
                setActivities((prev) => ({ ...prev, like: !prev.like }));
              }}
              style={{ color: activities.like ? "red" : "white" }}
            ></i>
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
          <i
            className="fa-solid fa-bookmark"
            onClick={() =>
              setActivities((prev) => ({ ...prev, savePost: !prev.savePost }))
            }
            style={{ color: activities.savePost ? "yellow" : "white" }}
          ></i>
        </span>
      </div>
    </div>
  );
}

export default Post;
