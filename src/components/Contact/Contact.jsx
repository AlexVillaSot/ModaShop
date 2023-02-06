import React from "react";
import "../Contact/Contact.scss";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Conffetti from "react-confetti";

const confettiEffect = () => {
  <Conffetti />;
};
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        {/* Message */}
        <span className="msg">únete al Mundo ModaShop y Escríbenos:</span>

        {/* Contact Input */}
        <div className="mail">
          <input
            className="mail"
            type="text"
            placeholder="Correo electrónico"
          />
          <motion.button
            onClick={confettiEffect}
            className="tipography"
            whileTap={{ scale: 0.9 }}
          >
            Enviar
          </motion.button>
        </div>

        {/* Contact Icons */}
        <div className="icons">
          <motion.span
            className="contact__icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon />
          </motion.span>
          <motion.span
            className="contact__icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.span>
          <motion.span
            className="contact__icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.span>
          <motion.span
            className="contact__icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoogleIcon />
          </motion.span>
          <motion.span
            className="contact__icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.span>
        </div>
      </div>
      <div id="particles"></div>
    </div>
  );
};

export default Contact;
