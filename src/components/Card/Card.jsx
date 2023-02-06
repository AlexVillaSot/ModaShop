import React from "react";
import "../Card/Card.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <Link className="link-1" to={`/product/${item.id}`}>
      <div className="card">
        {/* CARD IMAGE */}
        <motion.div whileHover={{ scale: 0.9 }} className="card__image">
          {item.isNew && <span className="link-1">Nueva Temporada</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </motion.div>
        {/* TITLE OF CARD */}
        <h2 className="tipography">{item.title}</h2>
        {/* PRICES */}
        <div className="prices">
          <h3 className="card tipography">${item.oldPrice}</h3>
          <h3 className="card tipography">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
