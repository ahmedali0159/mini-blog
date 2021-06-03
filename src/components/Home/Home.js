import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);
  const history = useHistory();

  const handleLoadMore = () => {
    setVisible((previousValue) => previousValue + 10);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container mt-5">
      <div className="row gy-5 equal-height-column"> 
      {items.slice(0, visible).map((item) => (
          <div key={item.id} className="col-sm-4">
              <div className="equal-column-content">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.body}</p>
                </div>
                <div className="text-center border-top-0 mb-1">
                  <button onClick={() => history.push(`item/${item.id}`)} class="btn btn-success ">View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className=" text-center mt-3">
          <button
            className="btn btn-dark details-btn"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
