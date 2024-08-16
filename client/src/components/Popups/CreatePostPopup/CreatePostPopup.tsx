import ReactDOM from "react-dom";
import personImg from "../../../images/person-img.png";
import "./CreatePostPopup.scss";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useEffect, useRef, useState } from "react";
import { setCreatePostWindow } from "../../../feature/createPostWindow/createPostWindowSlice";
import { createPostFormState } from "../../../Types/app";

function CreatePostPopup() {
  // Create Portal
  const element = document.getElementById("create-post-popup");

  // Is The Create Post Window Open
  const isOpen = useAppSelector(
    (state) => state.createPostWindow.createPostIsOpen
  );

  // Dispatch
  const dispatch = useAppDispatch();

  // Form
  const [form, setForm] = useState<createPostFormState>({
    text: "",
    authorize: "public",
  });

  // Images
  const [images, setImages] = useState<File[]>([]);

  // Show All Images
  const [showAllImages, setShowAllImages] = useState<boolean>(false);

  // Input Images
  const inputImage = useRef<HTMLInputElement | null>(null);

  // Handle Open Input Images
  function openInput() {
    inputImage.current?.click();
  }

  // Handle Close Window
  useEffect(() => {
    function handleCloseWindow(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.classList.contains("create-post-popup") ||
        target.classList.contains("close-window")
      ) {
        dispatch(setCreatePostWindow(false));
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleCloseWindow);
    }

    return () => {
      document.removeEventListener("click", handleCloseWindow);
    };
  }, [dispatch, isOpen]);

  // Handle Image Change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages([...images, ...filesArray]);
    }
  };

  // Handle Changes
  function handleChanges(
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Delete Image
  function handleDeleteAllImages() {
    setImages([]);
  }

  if (element) {
    return ReactDOM.createPortal(
      <div
        className="create-post-popup"
        style={{ height: isOpen ? "100%" : "0px", overflow: "hidden" }}
      >
        <div
          className="create-post-container"
          style={{ height: images.length > 0 ? "95vh" : "390px" }}
        >
          <div
            className="create-section"
            style={{
              left: showAllImages ? (images.length > 0 ? "100%" : "0%") : "0%",
            }}
          >
            <header>
              <div className="title-and-close">
                <button className="close-window">
                  <i className="fa-solid fa-xmark close-window"></i>
                </button>
                <h2>create post</h2>
              </div>

              <div className="user-info">
                <div className="image">
                  <img src={personImg} alt="" />
                </div>

                <div className="name-and-authorization">
                  <h4 className="name">Ahmed Mohamed Elshhat</h4>
                  <select
                    name="authorize"
                    value={form.authorize}
                    onChange={handleChanges}
                  >
                    <option value="private">private</option>
                    <option value="public">public</option>
                  </select>
                </div>
              </div>
            </header>

            <textarea
              placeholder="Write"
              name="text"
              value={form.text}
              onChange={handleChanges}
            />

            {images.length > 0 && (
              <div className="images">
                <button onClick={() => handleDeleteAllImages()}>
                  <i className="fa-solid fa-xmark"></i>
                </button>

                <div
                  className={`images-container ${
                    images.length === 3
                      ? "images-container-3"
                      : images.length === 4
                      ? "images-container-4"
                      : images.length > 4
                      ? "images-container-exceeds-4"
                      : ""
                  }`}
                  style={images.length > 1 ? { overflowX: "hidden" } : {}}
                >
                  {images.map((item, i) => (
                    <div
                      className="image"
                      key={i}
                      data-imagecount={`${images.length - 4} +`}
                      onClick={() => setShowAllImages(true)}
                    >
                      {item.type.includes("video") ? (
                        <video>
                          <source
                            src={URL.createObjectURL(item)}
                            type="video/mp4"
                          />
                        </video>
                      ) : (
                        <img
                          src={URL.createObjectURL(item)}
                          alt="5"
                          draggable="false"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="add-image-and-create">
              <div className="add-images">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  ref={inputImage}
                  onChange={handleImageChange}
                />
                <i className="fa-regular fa-image" onClick={openInput}></i>
                <h3>Add To You Post</h3>
              </div>

              <button className="send-btn">Create</button>
            </div>
          </div>

          <div
            className="images-section"
            style={{
              left: showAllImages
                ? images.length > 0
                  ? "0%"
                  : "-100%"
                : "-100%",
            }}
          >
            <div className="go-back">
              <i
                className="fa-solid fa-arrow-right"
                onClick={() => setShowAllImages(false)}
              ></i>
            </div>
            <div className="images">
              {images.map((item) => (
                <div className="image">
                  <button
                    onClick={() =>
                      setImages(images.filter((img) => img !== item))
                    }
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  {item.type.includes("video") ? (
                    <video>
                      <source
                        src={URL.createObjectURL(item)}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <img src={URL.createObjectURL(item)} alt="image" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>,
      element
    );
  }
}

export default CreatePostPopup;
