import React from "react";
import "../Categories/Categories.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <div className="categories">
      {/* COL 1 */}
      <div className="col">
        {/* ROW 1 */}
        <motion.div whileHover={{ scale: 1.1 }} className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <motion.button to="/products/1" whileTap={{ scale: 0.9 }}>
            <Link className="link-1 btn" to="/products/1">
              Ventas
            </Link>
          </motion.button>
        </motion.div>
        {/* ROW 2 */}
        <motion.div whileHover={{ scale: 1.1 }} className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <motion.button whileTap={{ scale: 0.9 }}>
            <Link className="link-1 btn" to="/products/1">
              Mujeres
            </Link>
          </motion.button>
        </motion.div>
      </div>

      {/* COL 2 */}
      <div className="col">
        {/* ROW 3 */}
        <motion.div whileHover={{ scale: 1.1 }} className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <motion.button whileTap={{ scale: 0.9 }}>
            <Link className="link-1 btn" to="/products/1">
              Nueva Temporada
            </Link>
          </motion.button>
        </motion.div>
      </div>

      {/* COL 3 */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            {/* ROW 4 */}
            <motion.div whileHover={{ scale: 1.1 }} className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <motion.button whileTap={{ scale: 0.9 }}>
                <Link className="link-1 btn" to="/products/1">
                  Hombres
                </Link>
              </motion.button>
            </motion.div>
          </div>
          <div className="col">
            {/* ROW 5 */}
            <motion.div whileHover={{ scale: 1.1 }} className="row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <motion.button whileTap={{ scale: 0.9 }}>
                <Link className="link-1 btn" to="/products/1">
                  Accesorios
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* ROW 6 */}
        <motion.div whileHover={{ scale: 1.1 }} className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <motion.button whileTap={{ scale: 0.9 }}>
            <Link className="link-1 btn" to="/products/1">
              Zapatos
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
