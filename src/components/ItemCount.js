import React from 'react'

export default function ItemCount({ onIncrement, onDecrement }) {
    return (
        <div>
            
            <button onClick= {onDecrement}>+</button>
            <button onClick= {onIncrement}>-</button>

        </div>
    )
}