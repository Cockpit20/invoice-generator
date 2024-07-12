import React from 'react';
import GenerateInvoice from './Components/GenerateInvoice';

const App = () => {
  const cartItems = [
    { id: 1, name: 'Item 1', quantity: 2, price: 10.0 },
    { id: 2, name: 'Item 2', quantity: 1, price: 20.0 },
    // Add more items as needed
  ];

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>My E-commerce App</h1>
      <GenerateInvoice cartItems={cartItems} totalAmount={totalAmount} user={user} />
    </div>
  );
};

export default App;
