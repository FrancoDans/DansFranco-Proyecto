import React from "react";
import Nike from "../../Imagenes/Nike.jpg";
import { useHistory, Link } from "react-router-dom";
import ContainerCount from "../../containers/CountContainer";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export default function Producto1({item}) {
  let history = useHistory();

  const {cart, addItem} = useContext(CartContext);

  const onAdd = () => {
    if(isInCart(item.id)){
      alert(`El producto seleccionado ya se encuentra en el carrito`)
    } else {
      addItem(item)
    }
  }

  return (
    <div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={Nike} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines Nike</h1>
          <p>Botines Hombre Phantom Gt Elite Df Sg-pro - 43</p>
          <p className="precio">$18.000</p>
        </div>
        <div className="buttom">
          <button onClick={() => addItem(item)}> </button>
          <button onClick={() => history.push("/1")} className="btn">
            Ver producto
          </button>
          <ContainerCount />
        </div>
      </div>
      <Link to={"/"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
