import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  return (
    <>
   
    <div className="home">
      <h1>Welcome to Food's Kitchen</h1>
      <button onClick={()=>navigate("/Menu")} id="btn">
        GO TO MENU
      </button>
    </div>
    </>
  );
};

export default Home;
