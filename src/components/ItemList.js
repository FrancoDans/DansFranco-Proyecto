import React from 'react';
import Item from './Item';

export default function ItemList({list}) {
    return (
        <div>
            {
                  list.map(product => {
                return <Item list = {product}/>} )
            }
         </div>
    )
}
