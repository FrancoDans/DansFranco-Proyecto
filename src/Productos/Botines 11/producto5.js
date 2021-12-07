import React from "react";
import Puma from "../../Imagenes/puma.jpg";
import { useHistory, Link } from "react-router-dom";
import ContainerCount from "../../containers/CountContainer";
export default function Producto5() {
  let history = useHistory();
  return (
    <div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={Puma} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines PUMA ULTRA</h1>
          <p>Botines Ultra 2.3 FG/AG de fútbol para hombre</p>
          <p className="precio">$15.000</p>
        </div>
        <div className="buttom">
          <Link to={"/cart"} className="btn">
            Añadir al carrito
          </Link>
          <button onClick={() => history.push("/5")} className="btn">
            Ver producto
          </button>
          <ContainerCount />
        </div>
        <Link to={"/"} className="btn-volver">
          Volver
        </Link>
      </div>
    </div>
  );
}
