import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const{name, id, price, img} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>id: {id}</p>
                <p>price: ৳ {price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                Add to Cart
            <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button> 
        </div>
    );
};

export default Product;