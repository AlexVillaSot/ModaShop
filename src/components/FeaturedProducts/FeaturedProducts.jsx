import React from "react";
import "../FeaturedProducts/FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Pantalones Street Cargo",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Saco Orange Suprime",
      isNew: true,
      oldPrice: 59,
      price: 39,
    },

    {
      id: 3,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Falda Perla Elegant",
      isNew: true,
      oldPrice: 29,
      price: 22,
    },

    {
      id: 4,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",

      title: "Gorro Urban Aesthethic",
      isNew: true,
      oldPrice: 25,
      price: 15,
    },
  ];

  return (
    <div className="featuredProducts">
      {/* TOP */}
      <div className="top">
        <h2 className="link-2">{type} Productos</h2>
        <p className="tipography">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
          veniam. Ipsum consequuntur, sapiente saepe nesciunt magni voluptate
          excepturi molestiae sed animi fugit sint ratione dolores iure
          cupiditate voluptatem. Sit, sed?
        </p>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
