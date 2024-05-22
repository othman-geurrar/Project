import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function Paypal() {

    const initialOptions = {
        clientId: "AX8RfL36yX8sDZmaYopQxXYnqptUMSXIYFVofVCqHXjYSGkbCC8HB1OrE_1OK3v7eI7qEpSULQYvSRtI",
        currency: "MAD",
    };

    return (
        <div className="App">
            <PayPalScriptProvider options={initialOptions}>
               
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: '400', // Use the state value for the amount
                                },
                            }],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert(`Transaction completed by ${details.payer.name.given_name}`);
                            // Optionally, handle post-transaction logic here
                        });
                    }}
                    onError={(err) => {
                        console.error("PayPal Checkout onError", err);
                        // Optionally, handle error state here
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default Paypal;
