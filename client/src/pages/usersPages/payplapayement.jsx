import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useAddpaymentsMutation } from '../../redux/services/paymentdata';

export default function Paypal({ calculateSubtotal }) {
  const initialOptions = {
    "client-id": "AX8RfL36yX8sDZmaYopQxXYnqptUMSXIYFVofVCqHXjYSGkbCC8HB1OrE_1OK3v7eI7qEpSULQYvSRtI",
    currency: "USD",
    intent: "capture",
    "buyer-country": "US",
  };

  

  const handleApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      console.log("Order details: ", details);
      const amount = calculateSubtotal();
      const currency = "USD";

      

      alert(`Transaction completed by ${details.payer.name.given_name}`);
    } catch (error) {
      console.error("Error capturing PayPal order: ", error);
    }
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            console.log("Creating order...");
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: calculateSubtotal(),
                },
              }],
            });
          }}
          onApprove={handleApprove}
          onError={(err) => {
            console.error("PayPal Checkout onError", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
