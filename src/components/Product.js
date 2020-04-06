import React from 'react';

const Product = (props) => {
  const {imgUrl, title, price} = props.product;
  const {addToCart} = props;
  return(
    <div>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>

      <button onClick={() => addToCart(props.product)}>Add To Cart</button>

    </div>
  )
}

export default Product;


