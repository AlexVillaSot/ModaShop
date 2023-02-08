import React from "react";
import Place from "@mui/icons-material/Place";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import "../Footer/Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      {/* TOP */}
      <div className="top">
        <div className="item">
          <h2>Categorías</h2>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Damas
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Caballeros
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Zapatos
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Accesorios
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Nueva Mercancía
          </motion.span>
        </div>
        <div className="item">
          <h2>Enlaces</h2>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            FAQ
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Páginas
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Tiendas
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Comparar
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="tipography"
          >
            Cookies
          </motion.span>
        </div>
        <div className="item">
          <h2>Nosotros</h2>
          <span className="tipography">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            enim velit rem molestias, voluptates officia reiciendis totam? Sequi
            atque beatae sapiente velit ratione consequuntur a incidunt, vero,
            voluptatem eaque voluptas!
          </span>
        </div>
        <div className="item">
          <h2>Contáctanos</h2>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            <Place className="footer__icon" />
            2097 St. Sheridan Blvd, Denver, Colorado
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            <Phone className="footer__icon" />
            +1-(202)-555-0199
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            <Email className="footer__icon" /> modashopmarket<span>@</span>
            ecommerce.com
          </motion.span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        {/* BOTTOM LEFT SIDE */}
        <div className="left">
          <motion.span whileTap={{ scale: 1.1 }}>
            <img className="moda__footer" src="/img/moda-logo.png" alt="" />
          </motion.span>
          <span className="copyright">
            © {year}{" "}
            <span className="link-1">
              <span className="link-2">ModaShop</span> - Developed with ❤️ by{" "}
              <span className="link-2">AlexCode</span>. All rights reserved
            </span>
          </span>
        </div>
        {/* BOTTOM RIGHT SIDE */}
        <div className="right">
          <img src="/img/pay.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
