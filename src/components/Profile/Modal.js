import axios from "axios";
import React, { useRef } from "react";
import { useMyContext } from "../Context/Context";

const Modal = () => {
  const refTitle = useRef();
  const refBody = useRef();
  const { editPost, userPost, setUserPost } = useMyContext();
  const { id, title, body } = editPost;

  const addPostHandler = (e) => {
    e.preventDefault();
    const updatePost = {
      id,
      userId: 2,
      title: refTitle.current.value,
      body: refBody.current.value,
    };
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, updatePost)
      .then((res) => {
        if (res.data) {
          e.target.reset();
          document.getElementById("modal-close").click();
          const indexOfupdatedPost = userPost.findIndex(
            (post) => post.id === id
          );
          const updateNewPost = userPost.filter((post) => post.id !== id);
          updateNewPost.splice(indexOfupdatedPost, 0, updatePost);
          setUserPost(updateNewPost);
        }
      });
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      tabIndex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Edit Your Post
            </h5>
            <button
              type="button"
              id="modal-close"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={addPostHandler}>
            <div className="modal-body">
              <input
                type="text"
                ref={refTitle}
                required
                defaultValue={title}
                placeholder="Title"
                className="form-control mb-3"
              />
              <textarea
                placeholder="Description"
                required
                ref={refBody}
                defaultValue={body}
                rows="5"
                className="form-control"
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-dark">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
