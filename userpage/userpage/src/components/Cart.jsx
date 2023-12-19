
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (item, change) => {
    const currentQuantity = itemQuantities[item._id] || 1;
    const newQuantity = Math.max(0, currentQuantity + change);

    setItemQuantities({ ...itemQuantities, [item._id]: newQuantity });
  };
  const getTotalWorth = () => {
    let total = 0;
    state.forEach((item) => {
      const quantity = itemQuantities[item._id] || 1;
      total += item.price * quantity;
    });
    return total;
  };

  const handleClose = (item) => {
    dispatch(delItem(item));
    const { [item._id]: _, ...rest } = itemQuantities;
    setItemQuantities(rest);
  };

  const cartItems = (cartItem) => {
    const quantity = itemQuantities[cartItem._id] || 1;

    return (
      <tr key={cartItem._id}>
        <td style={{
          background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ padding: '.5rem' }}>
            <img
              src={cartItem.image_url} // Replace with actual image path
              alt={cartItem.name}
              width="50"
            />
          </div>
        </td>
        
        <td>{cartItem.name}</td>
        <td>{cartItem.price}/-</td>
        <td>
          <button onClick={() => handleQuantityChange(cartItem, -1)} className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>
            -
          </button>
          {quantity}
          <button onClick={() => handleQuantityChange(cartItem, 1)} className="btn" style={{ backgroundColor: 'green', color: 'white' }}>
            +
          </button>
        </td>
        <td>{cartItem.price * quantity}/-</td>
        <td>
          <button onClick={() => handleClose(cartItem)} className="btn btn-danger">
            Remove
          </button>
        </td>
      </tr>
    );
  };

  const emptyCart = () => (
    <div className="container py-4">
      <h3>Your Cart is Empty</h3>
    </div>
  );

  return (
    <div className="container py-4">
      <h3 className="mb-4">Your Shopping Cart</h3>
      {state.length === 0 ? (
        emptyCart()
      ) : (
        <Row className="justify-content-center">
          <table responsive="sm" striped bordered hover className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{state.map(cartItems)}</tbody>
          </table>
        </Row>
      )}
      {state.length !== 0 && (
        <div className="text-center">
          <h5>Total Worth: {getTotalWorth()}/-</h5>
          <NavLink to="/checkout" className="btn btn-outline-primary mt-3">
            Proceed To Pay
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart; 



