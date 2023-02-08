import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "../Product/Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://cdn.shopify.com/s/files/1/0009/7101/4205/products/ICEHOODIEFRONT_1440x.jpg?v=1661446300",
    "https://cdn.shopify.com/s/files/1/0009/7101/4205/products/ICEHOODIEBACK_1440x.jpg?v=1661446300",
    "https://cdn.shopify.com/s/files/1/0009/7101/4205/products/icehomepagehero1_1440x.jpg?v=1661526982",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="link-1">Overtime Fresh Hoodie</h1>
        <span className="price">$199</span>
        <p className="link-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          perspiciatis vitae hic quos quod veritatis nulla provident facere
          eligendi voluptatem. Sed eum tenetur soluta tempore illum assumenda
          doloribus tempora quaerat.
        </p>
        <div className="quantity">
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="link-1"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </motion.button>
          {quantity}
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="link-1"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </motion.button>
        </div>
        <motion.button whileTap={{ scale: 0.9 }} className="add link-1">
          <AddShoppingCartIcon /> AÑADIR AL CARRITO
        </motion.button>
        <div className="links link-1">
          <div className="item">
            <span>
              <FavoriteBorderIcon />
            </span>
            AÑADIR A MIS FAVORITOS
          </div>
          <div className="item">
            <BalanceIcon /> COMPARAR PRODUCTO
          </div>
        </div>
        <div className="info link-1">
          <span>
            Vendedor: <span className="hover">Jake Phillips</span>
          </span>
          <span>
            Tipo de Producto: <span className="hover">Hoodie</span>
          </span>
          <span>
            Etiqueta:
            <span className="hover">Hoodie,</span>
            <span className="hover">Hombre,</span>
            <span className="hover">Beige</span>
          </span>
        </div>

        <div className="info link-1">
          <motion.span className="hover" whileTap={{ scale: 1.1 }}>
            DESCRIPCIÓN
          </motion.span>
          <hr />
          <motion.span className="hover" whileTap={{ scale: 1.1 }}>
            INFORMACIÓN ADICIONAL
          </motion.span>
          <hr />
          <motion.span className="hover" whileTap={{ scale: 1.1 }}>
            FAQ
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Product;
