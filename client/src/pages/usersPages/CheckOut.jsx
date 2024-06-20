import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Footer, NavBaar } from "../../components";
import { useAddordersMutation } from "../../redux/services/ordersdata";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import StripeCheckout from "react-stripe-checkout";
import {
  useGetcartQuery,
  useRemovecartMutation,
  useUpdateQuantityMutation,
} from "../../redux/services/cartApi";
import logo from "../../assets/img/logo.png";
import { useEditAccountMutation } from "../../redux/Users/userSliceFront";
import { useDispatch } from "react-redux";

function CheckoutPage() {
  // const { id } = useParams();

  const CURRENCY = "MAD";
  const id = localStorage.getItem("UserId");
  const user = JSON.parse(localStorage.getItem('User'))
  const { data: carts, refetch } = useGetcartQuery(id);
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removecart] = useRemovecartMutation();
  const [addorders ,{isSuccess , isError , error}] = useAddordersMutation()
  const [EditAccount , {isSuccess:orderSucc}] = useEditAccountMutation()

  const products = carts?.items;
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate instead of Navigate
 

  const handleRemoveItem = async ({ userId, productId }) => {
    try {
      await removecart({ userId, productId }).unwrap();
      refetch();
      console.log("Item removed successfully");
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const handleUpdateQuantity = async ({ userId, productId, quantity }) => {
    try {
      await updateQuantity({ userId, productId, quantity }).unwrap();
      refetch();
      console.log("Item quantity updated successfully");
    } catch (error) {
      console.error("Failed to update item quantity:", error);
    }
  };

  const calculateSubtotal = () => {
    return products
      ?.reduce((total, item) => total + item.newPrice * item.quantity, 0)
      .toFixed(2);
  };

  // Stripe Payment
  const KEY =
    "pk_test_51PL1ViRwYahvyErkIviiO0Wbj8uf7cxfel1tzWqje5c0x23CbUtHdraT4TRUNTq31gHm07uUqFq0BD4PQViWgJ2S00pgcz36Oh";
  const [stripeToken, setStripeToken] = useState(null);

  const orderProduct = products?.map(product => {
    return {
      productId: product.productId,
      name: product.name,
      imageURL: product.imageURL,
      quantity: product.quantity,
      color: product.color,
      size: product.size,
      newPrice: product.newPrice
    };
  });

  const order = {
    user:{
      name: user?.UserName,
      userId: user?.id,
      image: user?.profilePictureURL
    },
    products: orderProduct,
    orderStatus:"completed",
    totalPrice: calculateSubtotal()
  
  }
  console.log(order)

  
  useEffect(() => {
    if (isSuccess) {
      console.log(isSuccess)
      navigate('/');
      console.log('checkout');
    }
    if(isError){
      console.log(error)
    }
    if(orderSucc){
      console.log(orderSucc)
      
      
    }
  }, [isSuccess, isError , error , orderSucc , dispatch, navigate]);


  const onToken = async (token) => {
    setStripeToken(token);
    try {
      
      // Add orders
      const res = await addorders(order).unwrap();
      console.log('Backend response:', res?.order.id);
      await EditAccount({id , formData:{orders:res.order.id}})
      navigate("/user/profil");
    } catch (error) {
      console.error("Stripe payment error:", error);
    }
  };
  // PayPal Payment
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

      // Add orders
      await addOrder({ userId: id, products: products }).unwrap();

      alert(`Transaction completed by ${details.payer.name.given_name}`);
      navigate("/");
    } catch (error) {
      console.error("Error capturing PayPal order: ", error);
    }
  };

  return (
    <>
      <NavBaar />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mt-36">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium mb-6">Order Summary</p>
          {/* <p className="text-gray-400">Check your items. And select a suitable shipping method.</p> */}
          <div className="grid gap-6">
            {products?.map((product) => (
              <div
                key={product.productId}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-4"
              >
                <img
                  alt="Product Image"
                  className="aspect-square rounded-md object-cover"
                  height={80}
                  src={product.imageURL}
                  width={80}
                />
                <div className="grid gap-1">
                  <div className="font-medium">
                    {product.newPrice.toFixed(2)} MAD
                  </div>
                  <h3>{product.name}</h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Size: {product.size}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() =>
                      handleUpdateQuantity({
                        userId: id,
                        productId: product.productId,
                        quantity: product.quantity - 1,
                      })
                    }
                  >
                    <MinusIcon className="h-5 w-5" />
                  </button>
                  <div className="text-sm font-medium">{product.quantity}</div>
                  <button
                    className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() =>
                      handleUpdateQuantity({
                        userId: id,
                        productId: product.productId,
                        quantity: product.quantity + 1,
                      })
                    }
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() =>
                      handleRemoveItem({
                        userId: id,
                        productId: product.productId,
                      })
                    }
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <span className="text-lg font-semibold">
              {calculateSubtotal()} {CURRENCY}
            </span>
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">{/* Shipping options here */}</form>
        </div>
        <div className="max-w-md mx-auto p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <WalletCardsIcon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">PayPal</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Pay with your PayPal account for a faster checkout.
                  </p>
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 10 }}>
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                    tagline: false,
                    height: 30,
                  }}
                  createOrder={(data, actions) => {
                    console.log("Creating order...");
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: calculateSubtotal(), // Use your total amount here
                            currency_code: "USD", // Use your currency code here
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={handleApprove} // Corrected the prop name
                  onError={(err) => {
                    console.error("PayPal Checkout onError", err);
                  }}
                />
              </PayPalScriptProvider>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CreditCardIcon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Visa Card</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Pay securely with your Visa credit or debit card.
                  </p>
                </div>
              </div>
              <StripeCheckout
                name="Osay-checkout"
                image={logo}
                billingAddress
                shippingAddress
                description={`Your total is ${calculateSubtotal()} ${CURRENCY}`}
                amount={calculateSubtotal() * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="mt-4 mb-2 w-full rounded-md bg-blue-900 px-6 py-3 font-medium text-white">
                  Pay
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutPage;

function BitcoinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function WalletCardsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
