import React,{useEffect} from "react";
import Navbar from "./Navbar";
import "./Dashboard.scss";
import "aos/dist/aos.css"
import AOS from "aos"
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
const navigate =useNavigate()
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  const route = () => {
    navigate("/movies", {
      replace: true,
    });
  }
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div data-aos="fade-top" className="dashboard__title">
          <p className="dashboard__text">
           Welcome to movie page where you can find countless movie that you can search
            and check theirs overview.This page is created by Tugay Türk.
          </p>
        </div>
        <div data-aos="fade-top" className="dashboard__buttonContainer">
          <button onClick={route} className="dashboard__button">Show Movies</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
