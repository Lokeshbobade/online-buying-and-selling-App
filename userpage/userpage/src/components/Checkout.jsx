import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Address from './Address';
const Checkout = () => {
    const state = useSelector((state) => state.addItem);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [orderHistory, setOrderHistory] = useState([]); // State to store order history

    const total = state.reduce((acc, item) => acc + item.price, 0);
    const newTotal = total - discount;
    const itemList = (item) => {
        return (
            <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.name}</h6>
                </div>
                <span className="text-muted">{item.price.toFixed(2)}/-</span>
            </li>
        );
    }

    const handleApplyPromoCode = () => {
        if (promoCode === 'NEWUSER10') {
            setDiscount(total * 0.1); // 10% discount
        } else {
            setDiscount(0); // No discount applied
        }
    }

    const [showOrderDetails, setShowOrderDetails] = useState(false);

    const handleCheckout = () => {
        // Save the current order to order history
        const order = {
            items: state,
            total: newTotal,
            discount: discount,
        };
        setOrderHistory([...orderHistory, order]);

        // Display the order details
        setShowOrderDetails(true);
    }
    return (
        <>
            <div className="container my-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your Cart</span>
                        <span className="badge bg-primary rounded-pill">{state.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {state.map(itemList)}

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (IND)</span>
                            <strong>{total.toFixed(2)}/-</strong>
                        </li>
                        {discount > 0 && (
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Discount</span>
                                <strong className="text-danger">-{discount.toFixed(2)}</strong>
                            </li>
                        )}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>New Total (IND)</span>
                            <strong>{newTotal.toFixed(2)}/-</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Promo code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                            <button type="button" className="btn btn-secondary" onClick={handleApplyPromoCode}>
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-7 col-lg-8">
                 <Address/>
                    <h4 className="mb-3">Payment</h4>
                    <div className="my-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="cash-on-delivery" />
                            <label className="form-check-label" htmlFor="cash-on-delivery">Cash on Delivery</label>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <button
                        className="w-100 btn btn-primary btn-lg"
                        type="button"
                        onClick={handleCheckout}
                    >
                        Continue to checkout
                    </button>

                    {showSuccessMessage && (
                        <div className="alert alert-success mt-3">
                            Payment was successful!
                        </div>
                    )}
                    {showOrderDetails && (
                        <div className="mt-3">
                            <h4>Order Details</h4>
                            <ul className="list-group mb-3">
                                {state.map(itemList)}

                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (IND)</span>
                                    <strong>{total.toFixed(2)}/-</strong>
                                </li>
                                {discount > 0 && (
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Discount</span>
                                        <strong className="text-danger">{discount.toFixed(2)}/-</strong>
                                    </li>
                                )}
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>New Total (IND)</span>
                                    <strong>{newTotal.toFixed(2)}/-</strong>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="col-md-12">
                    <h4>Order History</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Total (IND)</th>
                                <th>Discount</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderHistory.map((order, index) => (
                                <tr key={index}>
                                    <td>Order {index + 1}</td>
                                    <td>{order.total.toFixed(2)}/-</td>
                                    <td>{order.discount.toFixed(2)}/-</td>
                                    <td>
                                        <ul>
                                            {order.items.map((item) => (
                                                <li key={item.id}>
                                                    {item.name} {item.price.toFixed(2)}/-
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Checkout;