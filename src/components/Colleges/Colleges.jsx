import React from "react";
import Card from "./Card";
import SchoolIcon from "@material-ui/icons/School";
const data = [
  {
    id: 1,
    img: "https://source.unsplash.com/200x201/?college",
    title: "Lucknow Campus",
  },
  {
    id: 2,
    img: "https://source.unsplash.com/200x202/?college",
    title: "Chennai Campus",
  },
  {
    id: 3,
    img: "https://source.unsplash.com/200x203/?university",
    title: "Amritsar Campus",
  },
  {
    id: 4,
    img: "https://source.unsplash.com/200x204/?college",
    title: "Agra Campus",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/200x205/?college",

    title: "Jaipur Campus",
  },
  {
    id: 6,
    img: "https://source.unsplash.com/200x206/?college",

    title: "Shimla Campus",
  },
  {
    id: 7,
    img: "https://source.unsplash.com/200x207/?college",
    title: "Surat Campus",
  },
  {
    id: 8,
    img: "https://source.unsplash.com/200x208/?college",
    title: "Mumbai Campus",
  },
  {
    id: 9,
    img: "https://source.unsplash.com/200x209/?college",
    title: "Ahmedabad Campus",
  },
  {
    id: 10,
    img: "https://source.unsplash.com/200x210/?college",
    title: "Indore Campus",
  },
  {
    id: 11,
    img: "https://source.unsplash.com/200x211/?college",
    title: "Varanasi Campus",
  },
  {
    id: 12,
    img: "https://source.unsplash.com/200x212/?college",
    title: "Kochi Campus",
  },
];

const Colleges = () => {
  return (
    <div>
      <h1 style={{ marginTop: "45px", padding: "5px", display: "inline-block" }}>
        COLLEGES <SchoolIcon />
      </h1>

      <div
        className="cardContainer"
        style={{
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          justifyItems: "center",
          background: "black",
          padding:"10px"
        }}
      >
        {data.map((card, index) => (
          <Card title={card.title} key={index} imageurl={card.img} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
