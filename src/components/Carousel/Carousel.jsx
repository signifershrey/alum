import React from "react";
import { data } from "./data";
import "./Carousel.css";
import { useState } from "react";
import icons from "../../utlities/geticons";

const Carousel = () => {
  const [curr, setCurr] = useState(0);

  const nextSlide = () => {
    setCurr(curr === data.length - 1 ? 0 : curr + 1);
  };

  const prevSlide = () => {
    setCurr(curr === 0 ? data.length - 1 : curr - 1);
  };

  return (
    <div>
      <img
        src={icons.left}
        className="left-arrow"
        height={30}
        width={30}
        alt="left-arrow"
        onClick={() => nextSlide()}
       
      />
      <img
        src={icons.right}
        className="right-arrow"
        height={30}
        width={30}
        alt="right-arrow"
        onClick={() => prevSlide()}
      />

      {data.map((val, index) => {
        return (
          <div
            key={index}
            className={index === curr ? "slide active" : "slide"}
          >
            {index === curr && (
              <img className="image" src={val.src} alt="img-slider" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
