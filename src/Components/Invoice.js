import React from 'react';
import './Invoice.css'

const Invoice = ({ cartItems, totalAmount, user }) => {
    return (
        <div id="invoice">
            <h1>Invoice</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3"><strong>Total Amount</strong></td>
                        <td>${totalAmount.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Invoice;
