import React from "react";
import Header from "./components/Header";
import data from "../src/data/data.json";
import "./Main.css";

const Main = () => {
  const { title, details } = data;
  return (
    <div className="Main">
      <img className="Logo" src="../logo.svg" />
      <Header title={title} details={details} />
    </div>
  );
};

export default Main;
