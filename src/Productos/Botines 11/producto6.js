import React from "react";
import PumaAmarillos from "../../Imagenes/pumaamarillos.jfif";
import { useHistory, Link } from "react-router-dom";

export default function Producto6() {
  let history = useHistory();
  return (
    <div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={PumaAmarillos} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines PUMA</h1>
          <p>Botines Future Z 3.2 FG/AG de fútbol para hombre</p>
          <p className="precio">$12.000</p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al Carrito</button>
          <button onClick={() => history.push("/6")} className="btn">
            Ver producto
          </button>
        </div>
      </div>
      <Link to={"/"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
