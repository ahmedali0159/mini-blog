import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import PostDeatils from "./components/PostDetails/PostDeatils";
import Profile from "./components/Profile/Profile";
import User from "./components/User/User";
import {ContextProvider} from './components/Context/Context';

function App() {
  return (
   <ContextProvider>
        <Router>
           <Switch>
             <Route exact path="/">
                <Home />
             </Route>
             <Route exact path="/profile">
               <Profile />
             </Route>
             <Route exact path="/user">
               <User />
             </Route>
             <Route path ="/item/:id">
               <PostDeatils />
             </Route>
           </Switch>
        </Router>
   </ContextProvider>
  );
}

export default App;
