import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDeatils = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h5>User Id: {id}</h5>
        <h3>Title: {item.title}</h3>
        <p>Description: {item.body}</p>
      </div>
      <div className="container mt-5">
      {comments.slice(0, 10).map(({ body, id, name, email }) => (
        <div className="card mt-5">
          <h5 className="card-header text-white bg-dark">Comments</h5>
          <div className="card-body">
            <h5 className="card-title">User ID: {id}</h5>
            <h3>Title: {name}</h3>
            <h5>Email: {email}</h5>
            <p className="card-text">
              {body}
            </p>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default PostDeatils;