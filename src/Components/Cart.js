// Cart.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './Cart.css'

const Cart = () => {
    const [items, setItems] = useState([
        { name: 'Item 1', price: 30, quantity: 2 },
        { name: 'Item 2', price: 50, quantity: 1 },
    ]);

    const generatePDF = () => {
        const input = document.getElementById('invoice');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('invoice.pdf');
            })
            .catch((error) => console.error('Error generating PDF', error));
    };

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Cart</h2>
            <div id="invoice">
                <h3>Invoice</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>Total Amount: ${totalAmount}</h4>
            </div>
            <button onClick={generatePDF}>Download Invoice as PDF</button>
        </div>
    );
};

export default Cart;
