import React from 'react'
import Nike from "../../Imagenes/Nike.jpg"
import { useHistory, Link } from 'react-router-dom';

export default function Producto1() {

    let history = useHistory();
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
    <button  className="btn">
        Añadir al Carrito
    </button>
    <button onClick={() => history.push("/1")} className="btn">
        Ver producto
    </button>
</div>
</div>
        <Link to= {"/"} className="btn-volver">Volver</Link> 
        </div>
    )
}
