import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList';


const ItemContainer = ()=> {

        const [products, setProducts] = useState([])

        useEffect(()=>{
            fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data.results)
            })
            .catch(console.log("error"))
        }, [])

        console.log(products);

    return (
        
            <ItemList list={products}/>
        
    )
}


export default ItemContainer;
