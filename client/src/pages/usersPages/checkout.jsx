import React, { useState } from 'react';
import { Footer, NavBaar } from '../../components';
import { useParams } from "react-router-dom";
import { useGetordersByIdQuery } from '../../redux/services/ordersdata';
import Visa from './visacart';
import Paypal from './payplapayement';
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

    return (
        <>
            <NavBaar />
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                       {data?.products.map((product, index) => (
    <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img
            className="m-2 h-24 w-28 rounded-md border object-cover object-center"
            src={product?.imageUrl}
            alt={product?.name}
        />
        <div className="flex w-full flex-col px-4 py-4">
            <input
                type="text"
                value={product?.name}
                readOnly // Assuming the product name is not editable
                className="font-semibold mb-2"
            />
            <input
                type="text"
                value={`Size: ${data.size[index]}`}
                readOnly // Assuming the size is not editable
                className="float-right text-gray-400 mb-2"
            />
            <input
                type="text"
                value={`Color: ${data.color[index]}`}
                readOnly // Assuming the color is not editable
                className="float-right text-gray-400 mb-2"
            />
            <input
                type="number"
                value={data.totalPrice} // Assuming totalPrice is the same for all products in the order
                readOnly // Assuming the total price is not editable
                className="mt-auto text-lg font-bold"
            />
        </div>
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
                        <p className="text-2xl font-semibold text-gray-900">${data?.totalPrice}</p>
                    </div>
                    <button className="mt-4 mb-2 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePaymentSubmit}>Proceed</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CheckoutPage;
