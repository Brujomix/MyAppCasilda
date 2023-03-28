import React from 'react'
import ShoppingCart from "../../data/icons/shopping-cart.png"

const CountCart = () => {
    return (
        <div className='count'>
            5
        </div>
    )
}

export const CartWidget = () => {
    return (
        <div className='boxCart'>
            <img
                src={ShoppingCart}
                alt='Cart Shop'
            />
            <CountCart />
        </div>
    )
}
