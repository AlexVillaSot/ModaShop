import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "../Products/Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2 className="link-2">Categorías de Producto</h2>
          <div className="inputItem">
            <input className="check" type="checkbox" id="1" value={1} />
            <label className="link-1" htmlFor="1">
              Zapatos
            </label>
          </div>
          <div className="inputItem">
            <input type="checkbox" className="check" id="2" value={2} />
            <label htmlFor="2" className="link-1">
              Faldas
            </label>
          </div>
          <div className="inputItem">
            <input type="checkbox" className="check" id="3" value={3} />
            <label htmlFor="3" className="link-1">
              Abrigos
            </label>
          </div>
        </div>
        <div className="filterItem">
          <h2 className="link-2">Filtrar por precio</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              className="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2 className="link-2">Ordenar por</h2>
          <div className="inputItem">
            <input
              className="asc"
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label className="link-1" htmlFor="asc">
              Precio (Más Alto)
            </label>
          </div>
          <div className="inputItem">
            <input
              className="asc"
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label className="link-1" htmlFor="asc">
              Precio (Más Bajo)
            </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
