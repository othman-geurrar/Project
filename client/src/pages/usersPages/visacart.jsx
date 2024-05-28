import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your own Stripe public key
const stripePromise = loadStripe('pk_test_51Jq0XvCnx4a7NYyTBkNc0BrcrbU1xW8L4ZkPvTAAS9gpmDZUYlkapY121Gv81NEnltseAywKeGBmEsZwcym4PSls005fjhUttD');

const StripePaymentForm = ({ totalPrice, currency, userId }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Fetch the client secret from the backend
        const response = await fetch('/payment/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: totalPrice * 100, currency, userId }), // Stripe expects amount in cents
        });

        const { clientSecret } = await response.json();

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: 'Customer Name',
                },
            },
        });

        if (error) {
            console.error(error);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment successful!');
            // Handle successful payment here (e.g., show a success message, update order status, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay {totalPrice} {currency}
            </button>
        </form>
    );
};


export default StripePaymentForm;
