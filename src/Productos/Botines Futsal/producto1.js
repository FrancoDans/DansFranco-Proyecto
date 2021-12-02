import React from "react";
import Adidas from "../../Imagenes/Fustal/AdidasB.jpg";
import { useHistory, Link } from "react-router-dom";

export default function Producto1() {
  return (
    <div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={Adidas} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines Adidas FUTSAL</h1>
          <p></p>
          <p className="precio">$18.000</p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al Carrito</button>
          <button className="btn">Ver producto</button>
        </div>
      </div>
      <Link to={"/futsal"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
