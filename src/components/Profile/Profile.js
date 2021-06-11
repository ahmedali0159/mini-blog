import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useMyContext } from "../Context/Context";
import Modal from "./Modal";

const Profile = () => {
  const { userPost, setUserPost } = useMyContext();
  const [progressing, setProgressing] = useState(false);
  const {editHandle} = useMyContext();
  const refTitle = useRef();
  const refBody = useRef();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=2")
    .then(res => {
      setUserPost(res.data);
  })
  }, [setUserPost]);

  const deleteHandler = (id) => {
    setProgressing(true);
     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.data) {
          setUserPost((previousPost) =>
            previousPost.filter((post => post.id !== id))
          );
          setProgressing(false);
        }
      })
  }
  
  const addPostHandler = e => {
    e.preventDefault();
    setProgressing(true);
    const postData = {
      id: 101,
      title: refTitle.current.value,
      body: refBody.current.value
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    .then(res => {
      if(res.data){
        setUserPost(previousPost => [...previousPost, postData])
        e.target.reset();
        setProgressing(false);
      }
    })
  }
  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-5">My Post</h2>
        <div className="row gy-4">
          {userPost.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  </div>
                  <div className="card-footer border-top-0 mb-2 d-flex p-2">
                    <button onClick={() => editHandle(post)}
                     data-bs-toggle="modal" 
                     data-bs-target="#staticBackdrop"  
                     type="button" 
                     className="btn btn-success ">
                      Edit
                    </button>
                    <Modal />
                    <button
                      onClick={() => deleteHandler(post.id)}
                      className=" btn btn-danger mx-3"
                    >
                      Delete
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row my-5 w-50 mx-auto">
        <h3 className="text-center">Add New Post</h3>
        <div>
       <form onSubmit={addPostHandler}>
       <div class="mb-3">
          <label for="Title" class="form-label">
            Title
          </label>
          <input
            name="title"
            required
            ref= {refTitle}
            type="text"
            className="form-control"
            placeholder="Write Your Title"
          />
        </div>
        <div class="mb-3">
          <label for="Description" class="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Write Your Opinion"
            rows= "5"
            name= "body"
            ref={refBody}
          />
        </div>
        <button type = "submit" className="w-100 btn btn-dark">
            Add Post
        </button>
        </form>
      
      </div>
      
      </div>
    
    </div>
  );
};

export default Profile;
