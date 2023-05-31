import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Quotes from "../components/Quotes";
const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
