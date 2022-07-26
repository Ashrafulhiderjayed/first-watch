import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const{name, id, price, img} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>id: {id}</p>
            <p>price: ৳ {price}</p>
        </div>
    );
};

export default Product;