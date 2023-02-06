import React from "react";
import "../Products/Products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categorías de Producto</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Zapatos</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filtrar por precio</h2>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Zapatos</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Ordenar por</h2>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Zapatos</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Products;
