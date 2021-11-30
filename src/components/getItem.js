import React from "react";

const items = [{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 },{ id: 5 },]

const getItem = (id) => {
    return new Promise ((res) => {
        setTimeout(()=>{
            res(items.find((item)=> item.id === id));
        }, 2000)
    })
}

export default getItem