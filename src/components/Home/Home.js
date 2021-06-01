import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(10);

    const handleLoadMore = () => {
        setVisible(previousValue => previousValue + 10);
    }

    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return (
        <div>
            <div>
                <Navbar />
            </div>
          <div className="container">
          {items.slice(0, visible).map(item => (
               <div className="card">
                   <div className="id">
                       <span>{item.id}</span>
                   </div>
                   <h3>{item.title}</h3>
                   <p>{item.body}</p>
               </div>
           ))}
           <button onClick={handleLoadMore}>Learn More</button>
          </div>
        </div>
        
    );
};

export default Home;