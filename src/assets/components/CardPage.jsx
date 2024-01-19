import React from 'react';
import { useCard } from './CardContext';

const CardPage = () => {
  const { cardState, dispatch, totalQuantity, totalAmount } = useCard();

  const handleIncrease = (itemId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { itemId } });
  };

  const handleDecrease = (itemId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { itemId } });
  };

  return (
    <div className="card-page">
      {cardState.products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleIncrease(product.id)}>Increase Quantity</button>
          <button onClick={() => handleDecrease(product.id)}>Decrease Quantity</button>
        </div>
      ))}
      <div className="totals">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default CardPage;
