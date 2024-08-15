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

  // Form
  const [form, setForm] = useState<createPostFormState>({
    text: "",
    authorize: "public",
  });

  // Images
  const [images, setImages] = useState<File[]>([]);

  // Input Images
  const inputImage = useRef<HTMLInputElement | null>(null);

  // Dispatch
  const dispatch = useAppDispatch();

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
    setForm({...form , [e.target.name]: e.target.value})
  }

  // Handle Open Input Images
  function openInput() {
    inputImage.current?.click();
  }

  // Handle Delete Image
  function handleDeleteAllImages() {
    setImages([]);
  }

  if (element) {
    return ReactDOM.createPortal(
      isOpen && (
        <div className="create-post-popup">
          <div
            className="create-post-container"
            style={{ height: images.length > 0 ? "600px" : "390px" }}
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
              style={{ height: images.length > 0 ? "70px" : "100px" }}
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
                >
                  {images.map((img, i) => (
                    <div
                      className="image"
                      key={i}
                      data-imagecount={`${images.length - 4} +`}
                    >
                      <img
                        src={URL.createObjectURL(img)}
                        alt="5"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="add-images">
              <input
                type="file"
                multiple
                ref={inputImage}
                onChange={handleImageChange}
              />
              <i className="fa-regular fa-image" onClick={openInput}></i>
              <h3>Add To You Post</h3>
            </div>

            <button className="send-btn">Create</button>
          </div>
        </div>
      ),
      element
    );
  }
}

export default CreatePostPopup;
