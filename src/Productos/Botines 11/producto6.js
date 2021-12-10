import React from "react";
import PumaAmarillos from "../../Imagenes/pumaamarillos.jfif";
import { useHistory, Link } from "react-router-dom";
import ContainerCount from "../../containers/CountContainer";
export default function Producto6({item}) {
  
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
            <img src={PumaAmarillos} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines PUMA</h1>
          <p>Botines Future Z 3.2 FG/AG de fútbol para hombre</p>
          <p className="precio">$12.000</p>
        </div>
        <div className="buttom">
          <Link to={"/cart"} className="btn">
            Añadir al carrito
          </Link>
          <button onClick={() => history.push("/6")} className="btn">
            Ver producto
          </button>
        </div>
        <ContainerCount />
      </div>
      <Link to={"/"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
