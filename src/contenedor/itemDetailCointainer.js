import React, { useEffect, useState } from "react"
import Item from "../components/Item";
import { useParams } from "react-router"
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemList";
import getItem from "../components/getItem";

const items = [{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 },{ id: 5 },]

const ItemDetailContainer = () => {
    return 
        <div>
         <ItemDetail item={items(2)} />
            <getItem />
        </div>    
}


export default ItemDetailContainer