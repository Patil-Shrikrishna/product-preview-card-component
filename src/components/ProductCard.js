import React from 'react'
import icon from '../images/icon-cart.svg' 
import './ProductCard.css'

export default function ProductCard(props) {
  return (
    <div className='productCardContainer'>
        <div className='product-image'>
          <img src={props.productImage}/>
        </div>
        <div className='product-details'>
          <p className='product-category'>{props.productDetails.category}</p>
          <p className='product-Name'>{props.productDetails.name}</p>
          <p className='product-desc'>{props.productDetails.description}</p>
          <div className='price-container'>
            <p className='product-discounted-price'>{props.productDetails.discountedPrice}</p> 
            <p className='product-price'><s>{props.productDetails.price}</s></p>
          </div>  
          <button className='btn-buy'><img src={icon}/>Add to Cart</button>
        </div>
    </div>
  )
}