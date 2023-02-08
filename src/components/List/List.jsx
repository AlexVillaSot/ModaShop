import React from "react";
import "../List/List.scss";
import Card from "../Card/Card";

const List = () => {
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
      img: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvcGElMjBkZSUyMG1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      title: "Pantalón Blanco de Lujo",
      isNew: true,
      oldPrice: 45,
      price: 35,
    },

    {
      id: 5,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9wYSUyMGRlJTIwbW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hoodie Sport Amarrilla",
      isNew: true,
      oldPrice: 39,
      price: 22,
    },

    {
      id: 6,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",

      title: "Gorro Urban Aesthethic",
      isNew: true,
      oldPrice: 25,
      price: 15,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
