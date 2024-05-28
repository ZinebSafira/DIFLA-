import React from "react";
import "./Slider.css";
import Card from "./Card.jsx";

const Slider = () => {
  return (
    <div className="slider">
      <Card image="/public/window.png" title="Window" />
      <Card image="/public/window.png" title="Title 2" />
      <Card image="/public/window.png" title="Title 3" />
      <Card image="/public/window.png" title="Title 4" />
      <Card image="/public/window.png" title="Title 5" />
      <Card image="/public/window.png" title="Title 6" />
      <Card image="/public/window.png" title="Title 7" />
      <Card image="/public/window.png" title="Title 8" />
      <Card image="/public/window.png" title="Title 5" />
      <Card image="/public/window.png" title="Title 6" />
      <Card image="/public/window.png" title="Title 7" />
      <Card image="/public/window.png" title="Title 8" />
    </div>
  );
};

export default Slider;
