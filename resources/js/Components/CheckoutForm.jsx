// src/CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentMethodType, setPaymentMethodType] = useState('card');
  const [amount, setAmount] = useState(1000); // default amount in cents
  const [currency, setCurrency] = useState('usd');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: paymentMethodType,
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setProcessing(false);
      return;
    }

    const response = await fetch('http://localhost:3001/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency, paymentMethodType }),
    });

    const paymentIntentResponse = await response.json();
    const { clientSecret } = paymentIntentResponse;

    const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setPaymentError(confirmError.message);
      setProcessing(false);
      return;
    }

    setPaymentSucceeded(true);
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-96 p-4 border rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Payment Method</label>
        <select
          value={paymentMethodType}
          onChange={(e) => setPaymentMethodType(e.target.value)}
          className="p-2 border rounded-lg w-full text-gray-700"
        >
          <option value="card">Card</option>
          <option value="sepa_debit">SEPA Debit</option>
          <option value="ideal">iDEAL</option>
          <option value="ideal">D17</option>
          <option value="ideal">E-dinar</option>
          {/* Add other payment methods as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Amount (in cents)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="p-2 border rounded-lg w-full text-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Currency</label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 border rounded-lg w-full text-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Card Details</label>
        <div className="p-2 border rounded-lg">
          <CardElement className="p-2" />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        {processing ? 'Processing...' : 'Pay'}
      </button>

      {paymentError && <div className="mt-4 text-red-500">{paymentError}</div>}
      {paymentSucceeded && <div className="mt-4 text-green-500">Payment succeeded!</div>}
    </form>
  );
};

export default CheckoutForm;
