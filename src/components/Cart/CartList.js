import React from 'react';
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

export default function CartList({ value }) {
    const { cart } = value;
    return (
        <div className="container-fluid">
            {cart.map(x => {
                return <CartItem key={x.id} item={x} value={value} />
            })}
            <CartTotals value={value} />
        </div>
    )
}
