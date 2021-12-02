import React from "react";
import NikeRyB from "../../Imagenes/nikeryb.jpg";
import { useHistory, Link } from "react-router-dom";

export default function Producto4() {
  let history = useHistory();
  return (
    <div className="producto">
      <a href="#">
        <div className="producto-img">
          <img src={NikeRyB} alt="" />
        </div>
      </a>
      <div className="producto-footer">
        <h1>Botines NIKE PHANTOM</h1>
        <p>Botines Nike Phantom GT Academy FG/MG</p>
        <p className="precio">$14.000</p>
      </div>
      <div className="buttom">
        <button className="btn">Añadir al Carrito</button>
        <button onClick={() => history.push("/4")} className="btn">
          Ver producto
        </button>
      </div>
      <Link to={"/"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
