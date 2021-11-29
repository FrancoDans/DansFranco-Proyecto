import React from 'react'

export default function Item({list}) {
    return (
        <div>
            <h1>{list.id}</h1>
            <h2>{list.name}</h2>
            <h3>{list.status}</h3>
        </div>
    )
}
