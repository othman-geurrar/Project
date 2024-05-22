import React, { useState } from 'react';
import { Footer, NavBaar } from '../../components';
import { useParams } from "react-router-dom";
import { useGetordersByIdQuery } from '../../redux/services/ordersdata';
import Visa from './visacart';
import Paypal from './payplapayement';
import {
    useGetcartQuery,
    useRemovecartMutation,
    useUpdateQuantityMutation,
  } from "../../redux/services/cartApi";
function CheckoutPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetordersByIdQuery(id);
    const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
    const [showPaymentOptions, setShowPaymentOptions] = useState(true); // State to control the visibility of payment options
console.log(data)
    const handlePaymentSubmit = () => {
        setShowPaymentOptions(false); // Hide payment options after "Proceed" button is clicked
    };

    const handlePaymentOptionChange = (event) => {
        setSelectedPaymentOption(event.target.value);
    };

    const handleGoBackClick = () => {
        setSelectedPaymentOption(''); // Reset selected payment option
        setShowPaymentOptions(true); // Show payment options
    };
    const { data: carts, refetch } = useGetcartQuery(6954);

    const [updateQuantity] = useUpdateQuantityMutation();
  const [removecart] = useRemovecartMutation();

  const products = carts?.items;
  console.log(products);

  const handleRemoveItem = async ({ userId, productId }) => {
    // const userId = userId ;
    try {
      await removecart({ userId, productId }).unwrap();
      // Invalidate or refetch the cart query to update the UI
      refetch();
      console.log("Item removed successfully");
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const handleUpdateQuantity = async ({ userId, productId, quantity }) => {
    // setLoading(true);
    // setError(null);
    try {
      await updateQuantity({ userId, productId, quantity }).unwrap();
      refetch();
      console.log("Item quantity updated successfully");
    } catch (error) {
      // setError('Failed to update item quantity');
      console.error("Failed to update item quantity:", error);
    } finally {
      // setLoading(false);
      console.log("done");
    }
  };

 

  const calculateSubtotal = () => {
    return products
      ?.reduce((total, item) => total + item.newPrice * item.quantity, 0)
      .toFixed(2);
  };


    return (
        <>
            <NavBaar />
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="grid gap-6">
            {products?.map((product) => (
              <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
              <img
                alt="Product Image"
                className="aspect-square rounded-md object-cover"
                height={80}
                src={product.imageURL}
                width={80}
              />
              <div className="grid gap-1">
                <div className="font-medium">{product.newPrice.toFixed(2)} MAD</div>
                <h3>{product.name}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Size : {"  "} {product.size}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" 
                 onClick={() =>
                    handleUpdateQuantity({
                      userId: 6954,
                      productId: product.productId,
                      quantity: product.quantity - 1,
                    })
                  }>
                  <MinusIcon className="h-5 w-5" />
                  <span className="sr-only">Decrease quantity</span>
                </button>
                <div className="text-sm font-medium">{product.quantity}</div>
                <button className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" 
                onClick={() =>
                    handleUpdateQuantity({
                      userId: 6954,
                      productId: product.productId,
                      quantity: product.quantity + 1,
                    })
                }
                    >
                  <PlusIcon className="h-5 w-5" />
                  <span className="sr-only">Increase quantity</span>
                </button>
                <button
                  className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() =>
                    handleRemoveItem({
                      userId: 6954,
                      productId: product.productId,
                    })
                  }
                >
                  <TrashIcon className="h-5 w-5" />
                  <span className="sr-only">Remove product</span>
                </button>

              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />


            </div>

            ))}

                    </div>


                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <form className="mt-5 grid gap-6">
                        {/* Shipping options here */}
                    </form>
                </div>
                <div className="px-4 pt-8">
                    {showPaymentOptions ? ( // Display payment options if showPaymentOptions is true
                        <div>
                            <label htmlFor="payment-option" className="block text-sm font-medium">Payment Option</label>
                            <div className="mt-2">
                                <div className="flex items-center">
                                    <input
                                        id="visa"
                                        type="radio"
                                        name="payment-option"
                                        value="visa"
                                        checked={selectedPaymentOption === 'visa'}
                                        onChange={handlePaymentOptionChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="visa" className="cursor-pointer flex items-center">
                                        <img className="w-10 h-10 object-contain mr-2 rounded-lg" src="https://pbs.twimg.com/profile_images/1432789190257909773/U_QLhKWv_400x400.png" alt="Visa Card" />
                                    </label>
                                </div>
                                <div className="flex items-center mt-4">
                                    <input
                                        id="paypal"
                                        type="radio"
                                        name="payment-option"
                                        value="paypal"
                                        checked={selectedPaymentOption === 'paypal'}
                                        onChange={handlePaymentOptionChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="paypal" className="cursor-pointer flex items-center">
                                        <img className="w-10 h-10 object-contain mr-2 rounded-lg" src="https://filecache.mediaroom.com/mr5mr_paypal/177465/pp_h_rgb_logo_tn.jpg" alt="PayPal" />
                                    </label>
                                </div>
                                <div className="flex items-center mt-4">
                                    <input
                                        id="crypto"
                                        type="radio"
                                        name="payment-option"
                                        value="crypto"
                                        checked={selectedPaymentOption === 'crypto'}
                                        onChange={handlePaymentOptionChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="crypto" className="cursor-pointer flex items-center">
                                        <img className="w-10 h-10 object-contain mr-2 rounded-lg" src="https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg" alt="Crypto" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button onClick={handleGoBackClick} type="button" className="mb-3 w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-black border rounded-lg gap-x-2 sm:w-auto hover:text-black hover:bg-white dark:text-black dark:border-gray-700">
                                <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Go back</span>
                            </button>

                            {selectedPaymentOption === 'visa' && <Visa />}
                            {selectedPaymentOption === 'paypal' && <Paypal/>}
                            {selectedPaymentOption === 'crypto' && <p>Crypto Payment Component</p>}
                        </>
                    )}
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <span className="text-lg font-semibold">{calculateSubtotal()} MAD</span>
                    </div>
                    <button className="mt-4 mb-2 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePaymentSubmit}>Proceed</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CheckoutPage;

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
  
  function XIcon(props) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }