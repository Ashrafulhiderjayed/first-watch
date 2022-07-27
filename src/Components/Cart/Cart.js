import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.cart;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1)).toFixed((2));
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;