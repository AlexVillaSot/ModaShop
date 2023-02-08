import React from "react";
import "../Cart/Cart.scss";
import { motion } from "framer-motion";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Pantalones Street Cargo",
      desc: "Pantalones Street Cargo",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Saco Orange Suprime",
      desc: "Saco Orange Suprime",
      isNew: true,
      oldPrice: 59,
      price: 39,
    },
  ];
  return (
    <div className="cart">
      <h1 className=" title tipography">Productos en el Carrito</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details tipography">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price link-1">1x ${item.price}</div>
          </div>
          <motion.div whileTap={{ scale: 0.8 }} className="delete">
            <DeleteOutlinedIcon />
          </motion.div>
        </div>
      ))}
      <div className="total link-1">
        <span>SUB-TOTAL</span>
        <span>$123</span>
      </div>
      <motion.button whileTap={{ scale: 0.9 }} className="link-2">
        <CreditScoreIcon />
        PROCESAR PAGO
      </motion.button>
      <span className="reset tipography">Vaciar Carrito</span>
    </div>
  );
};

export default Cart;
