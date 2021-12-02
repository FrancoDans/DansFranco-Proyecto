import React from "react";
import Adidas from "../Imagenes/Fustal/AdidasB.jpg";
import AdidasByD from "../Imagenes/Fustal/AdidasByD.jfif";
import NikeGyR from "../Imagenes/Fustal/NikeGyR.jpg";
import Penalty from "../Imagenes/Fustal/penalty.jfif";
import Puma from "../Imagenes/Fustal/puma.jpg";
import Umbro from "../Imagenes/Fustal/UmbroN.jpg";
import { useHistory, Link } from "react-router-dom";

export default function ItemList({ list }) {
  let history = useHistory();

  return (
    <div>

      <h1 className="titulo"> PRODUCTOS FUTSAL</h1>
      <div><Link to= {"/"} className="btn-volver">Volver</Link> </div>
      <div className="productos">
        {/* PRODUCTO 1 */}
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
              <button onClick={() => history.push("/futsal/1")} className="btn">
                Ver producto
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTO 2 */}
        <div className="producto">
          <a href="#">
            <div className="producto-img">
              <img src={AdidasByD} alt="" />
            </div>
          </a>
          <div className="producto-footer">
            <h1>Botines Adidas FUTSAL</h1>
            <p>
              BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 7 ACADEMY FG/MG AZUL
            </p>
            <p className="precio">$20.000</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <button onClick={() => history.push("/futsal/2")} className="btn">
              Ver producto
            </button>
          </div>
        </div>

        {/* PRODUCTO 3 */}
        <div className="producto">
          <a href="#">
            <div className="producto-img">
              <img src={NikeGyR} alt="" />
            </div>
          </a>
          <div className="producto-footer">
            <h1>Botines NIKE FUTSAL</h1>
            <p>
              BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 8 ACADEMY FG/MG UNISEX
              ROJO
            </p>
            <p className="precio">$17.000</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <button onClick={() => history.push("/futsal/3")} className="btn">
              Ver producto
            </button>
          </div>
        </div>

        {/* PRODUCTO 4 */}
        <div className="producto">
          <a href="#">
            <div className="producto-img">
              <img src={Penalty} alt="" />
            </div>
          </a>
          <div className="producto-footer">
            <h1>Botines Penalty FUTSAL</h1>
            <p>Botines Nike Phantom GT Academy FG/MG</p>
            <p className="precio">$14.000</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <button onClick={() => history.push("/futsal/4")} className="btn">
              Ver producto
            </button>
          </div>
        </div>

        {/* PRODUCTO 5 */}
        <div>
          <div className="producto">
            <a href="#">
              <div className="producto-img">
                <img src={Puma} alt="" />
              </div>
            </a>
            <div className="producto-footer">
              <h1>Botines PUMA FUTSAL</h1>
              <p>Botines Ultra 2.3 FG/AG de fútbol para hombre</p>
              <p className="precio">$15.000</p>
            </div>
            <div className="buttom">
              <button className="btn">Añadir al Carrito</button>
              <button onClick={() => history.push("/futsal/5")} className="btn">
                Ver producto
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTO 6 */}
        <div>
          <div className="producto">
            <a href="#">
              <div className="producto-img">
                <img src={Umbro} alt="" />
              </div>
            </a>
            <div className="producto-footer">
              <h1>Botines Umbro FUTSAL</h1>
              <p>Botines Future Z 3.2 FG/AG de fútbol para hombre</p>
              <p className="precio">$12.000</p>
            </div>
            <div className="buttom">
              <button className="btn">Añadir al Carrito</button>
              <button onClick={() => history.push("/futsal/6")} className="btn">
                Ver producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
