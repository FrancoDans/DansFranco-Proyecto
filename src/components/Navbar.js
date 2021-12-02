import React from "react";
import Icono from "../Imagenes/icons8.png";
import { useHistory, Link } from "react-router-dom";

export default function NavBar() {
  let history = useHistory();

  return (
    <header>
      <a href="#">
        <img src={Icono} alt="logo" width="150px" />
      </a>

      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a onClick={() => history.push("/futsal")} href="#">
            BOTINES FUTSAL
          </a>
        </li>
      </ul>
      <div className="Carrito">
        <box-icon name="cart"></box-icon>
      </div>
    </header>
  );
}
