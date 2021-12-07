import React from "react";
import NikeRojo from "../../Imagenes/nikerojo.jpg";
import { useHistory, Link } from "react-router-dom";
import ContainerCount from "../../containers/CountContainer";
export default function Producto3() {
  let history = useHistory();
  return (
    <div className="producto">
      <a href="#">
        <div className="producto-img">
          <img src={NikeRojo} alt="" />
        </div>
      </a>
      <div className="producto-footer">
        <h1>Botines NIKE MERCURIAL</h1>
        <p>
          BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 8 ACADEMY FG/MG UNISEX ROJO
        </p>
        <p className="precio">$17.000</p>
      </div>
      <div className="buttom">
        <Link to={"/cart"} className="btn">
          Añadir al carrito
        </Link>
        <button onClick={() => history.push("/3")} className="btn">
          Ver producto
        </button>
        <ContainerCount />
      </div>
      <Link to={"/"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
