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
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Damas
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Caballeros
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Zapatos
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Accesorios
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Nueva Mercancía
          </motion.span>
        </div>
        <div className="item">
          <h2>Enlaces</h2>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            FAQ
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Páginas
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Tiendas
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Comparar
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="tipography">
            Cookies
          </motion.span>
        </div>
        <div className="item">
          <h2>Nosotros</h2>
          <span className="tipography">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            consequatur aliquam iusto cumque voluptates amet temporibus
            incidunt, inventore soluta dolor.
          </span>
        </div>
        <div className="item">
          <h2>Contáctanos</h2>
          <motion.div whileHover={{ scale: 1.1 }}>
            <span>
              <p>
                <Place className="footer__icon" />{" "}
                <span className="tipography">
                  2097 S Sheridan Blvd, Denver, Colorado
                </span>{" "}
              </p>
            </span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <span>
              <p>
                <Phone className="footer__icon" />{" "}
                <span className="tipography">+1-(202)-555-0199</span>{" "}
              </p>
            </span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <span>
              <p>
                <Email className="footer__icon" />{" "}
                <span className="tipography">
                  modashopmarket<span>@</span>ecommerce.com
                </span>
              </p>
            </span>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        {/* BOTTOM LEFT SIDE */}
        <div className="left">
          <motion.span whileTap={{ scale: 1.1 }}>
            <img className="moda" src="/img/moda-logo.png" alt="" />
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
