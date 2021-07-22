import React from "react";
import cardcss from "./Card.module.css";

const Card = ({ imageurl, title }) => {
  return (
    <div className={cardcss.card}>
      <img className={cardcss.image2} src={imageurl} alt="destination-name" />
      <p className={cardcss.text}>{title}</p>
    </div>
  );
};

export default Card;
