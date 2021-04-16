import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          className="home__image"
          src="https://uwaterloo.ca/engineering/sites/ca.engineering/files/resize/uploads/images/google-logo-500x333.jpg"
          alt="google Image"
        />
        <Search hideButton />
      </div>
    </div>
  );
};

export default Home;
