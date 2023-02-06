import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* LEFT Side */}
        <div className="left">
          {/* FLAG */}
          <motion.div whileTap={{ scale: 0.9 }} className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </motion.div>
          {/* PAYMENT METHOD */}
          <motion.div whileTap={{ scale: 0.9 }} className="item">
            <span className="tipography">USD</span>
            <KeyboardArrowDownIcon />
          </motion.div>
          {/* LINKS */}
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/products/1">
              {" "}
              <span className="tipography">Damas</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/products/2">
              {" "}
              <span className="tipography">Caballeros</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/products/3">
              <span className="tipography">Niños</span>
            </Link>
          </motion.div>
        </div>

        {/* CENTER Side */}
        <motion.div whileTap={{ scale: 1.1 }} className="center">
          <Link className="link" to="/">
            <img className="moda" src="/img/moda-logo.png" alt="" />
          </Link>
        </motion.div>

        {/* RIGHT Side */}
        <div className="right">
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/">
              <span className="tipography">Inicio</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/">
              <span className="tipography">Sobre Nosotros</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/">
              {" "}
              <span className="tipography">Contáctanos</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="item">
            <Link className="link-1" to="/">
              {" "}
              <span className="tipography">Tiendas</span>
            </Link>
          </motion.div>

          {/* ICONS */}
          <div className="home__icons">
            <motion.div whileTap={{ scale: 0.9 }} className="searchIcon">
              <SearchIcon />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} className="personIcon">
              <PersonOutlineOutlinedIcon />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} className="favoriteIcon">
              <FavoriteBorderOutlinedIcon />
              <span>0</span>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
