import { Button } from "@material-tailwind/react";
import React from "react";
import event from "../../assets/img/event.jpg";
import logo from "../../assets/img/logo.png";
import { NavBaar } from "../../components";

function EventDetails() {
  return (
    <div>
      <NavBaar />
      <section
        className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800 "
        style={{
          background:
            "linear-gradient(to left, #00DCBA, #00C3A5, #00A98F, #009079)",
        }}
      >
        <div className="container px-4 md:px-6 sm:mt-16 min-[320px]:mt-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] animate-fadeIn">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-slideInLeft">
                  Teck Med
                </h1>
                <p className="text-white md:text-xl dark:text-gray-400 animate-slideInRight">
                  June 14-16, 2024 | Rabat, Marocco
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-gray-500 animate-bounce"
                  variant="primary"
                >
                  Buy Tickets
                </Button>
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:border-teal-800 animate-bounce"
                  variant="secondary"
                >
                  View Schedule
                </Button>
              </div>
            </div>
            <img
              alt="Web Summit 2024"
              className="mx-auto aspect-video overflow-hidden rounded object-cover sm:w-full lg:order-last lg:aspect-square animate-zoomIn"
              height="550"
              src={event}
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slideInLeft">
                Event Details
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-slideInRight">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                molestias possimus ut sunt expedita! Mollitia fuga est facere
                possimus tenetur molestiae quia. Inventore aperiam doloribus in
                facere odio expedita ipsum?
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">Date</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  June 14-16, 2024
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">
                  Location
                </h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  Rabat, Morocco
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold animate-slideInUp">Tickets</h3>
                <p className="text-gray-500 dark:text-gray-400 animate-slideInDown">
                  General admission, student, and group tickets available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Speakers
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from industry leaders and experts on the latest trends and
              innovations in technology.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="Jane Doe"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">Jane Doe</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  CEO, Acme Inc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="John Smith"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">John Smith</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  CTO, Acme Inc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="Sarah Lee"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">Sarah Lee</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Head of Product, Acme Inc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-zoomIn">
              <img
                alt="Michael Johnson"
                className="aspect-square rounded-full object-cover"
                height="100"
                src={logo}
                width="100"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold">Michael Johnson</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Lead Engineer, Acme Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slideInLeft">
                Get Your Tickets Now
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-slideInRight">
                Don't miss out on the biggest tech event of the year. Secure
                your spot today and join us in Lisbon for 3 days of networking,
                learning, and discovery.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button
                className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-teal-600 animate-bounce"
                variant="primary"
              >
                Buy Tickets
              </Button>
              <Button
                className="bg-gray-700 inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:border-teal-300 animate-bounce"
                variant="secondary"
              >
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;





// import React, { useState } from 'react';
// import { Footer, NavBaar } from '../../components';
// import { useParams } from "react-router-dom";
// import { useGetordersByIdQuery } from '../../redux/services/ordersdata';
// import Paypal from './payplapayement';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import StripeCheckout from 'react-stripe-checkout';

// import {
//     useGetcartQuery,
//     useRemovecartMutation,
//     useUpdateQuantityMutation,
//   } from "../../redux/services/cartApi";
// function CheckoutPage() {
//     const { id } = useParams();
//     const { data, isLoading, isError } = useGetordersByIdQuery(id);
//     const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
//     const [showPaymentOptions, setShowPaymentOptions] = useState(true); // State to control the visibility of payment options
// console.log(data)
//     const handlePaymentSubmit = () => {
//         setShowPaymentOptions(false); // Hide payment options after "Proceed" button is clicked
//     };

//     const handlePaymentOptionChange = (event) => {
//         setSelectedPaymentOption(event.target.value);
//     };

// const CURRENCY='MAD';


//     const handleGoBackClick = () => {
//         setSelectedPaymentOption(''); // Reset selected payment option
//         setShowPaymentOptions(true); // Show payment options
//     };
//     const { data: carts, refetch } = useGetcartQuery(6954);

//     const [updateQuantity] = useUpdateQuantityMutation();
//   const [removecart] = useRemovecartMutation();

//   const products = carts?.items;
//   console.log(products);

//   const handleRemoveItem = async ({ userId, productId }) => {
//     // const userId = userId ;
//     try {
//       await removecart({ userId, productId }).unwrap();
//       // Invalidate or refetch the cart query to update the UI
//       refetch();
//       console.log("Item removed successfully");
//     } catch (error) {
//       console.error("Failed to remove item:", error);
//     }
//   };

//   const handleUpdateQuantity = async ({ userId, productId, quantity }) => {
//     // setLoading(true);
//     // setError(null);
//     try {
//       await updateQuantity({ userId, productId, quantity }).unwrap();
//       refetch();
//       console.log("Item quantity updated successfully");
//     } catch (error) {
//       // setError('Failed to update item quantity');
//       console.error("Failed to update item quantity:", error);
//     } finally {
//       // setLoading(false);
//       console.log("done");
//     }
//   };

  


//   const calculateSubtotal = () => {
//     return products
//       ?.reduce((total, item) => total + item.newPrice * item.quantity, 0)
//       .toFixed(2);
//   };
//   /// stripe
//   const KEY ='pk_test_51PL1ViRwYahvyErkIviiO0Wbj8uf7cxfel1tzWqje5c0x23CbUtHdraT4TRUNTq31gHm07uUqFq0BD4PQViWgJ2S00pgcz36Oh'
//   const onToken = (token) => {
//     console.log(token);}
//     return (
//         <>
//             <NavBaar />
//             <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mt-36">
//                 <div className="px-4 pt-8">
//                     <p className="text-xl font-medium">Order Summary</p>
//                     <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
//                     <div className="grid gap-6">
//             {products?.map((product) => (
//               <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
//               <img
//                 alt="Product Image"
//                 className="aspect-square rounded-md object-cover"
//                 height={80}
//                 src={product.imageURL}
//                 width={80}
//               />
//               <div className="grid gap-1">
//                 <div className="font-medium">{product.newPrice.toFixed(2)} MAD</div>
//                 <h3>{product.name}</h3>
//                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                   Size : {"  "} {product.size}
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" 
//                  onClick={() =>
//                     handleUpdateQuantity({
//                       userId: 6954,
//                       productId: product.productId,
//                       quantity: product.quantity - 1,
//                     })
//                   }>
//                   <MinusIcon className="h-5 w-5" />
//                   <span className="sr-only">Decrease quantity</span>
//                 </button>
//                 <div className="text-sm font-medium">{product.quantity}</div>
//                 <button className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" 
//                 onClick={() =>
//                     handleUpdateQuantity({
//                       userId: 6954,
//                       productId: product.productId,
//                       quantity: product.quantity + 1,
//                     })
//                 }
//                     >
//                   <PlusIcon className="h-5 w-5" />
//                   <span className="sr-only">Increase quantity</span>
//                 </button>
//                 <button
//                   className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={() =>
//                     handleRemoveItem({
//                       userId: 6954,
//                       productId: product.productId,
//                     })
//                   }
//                 >
//                   <TrashIcon className="h-5 w-5" />
//                   <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                  
//                 </button>

//               </div>



//             </div>
           
//             ))}

//                     </div>
// <div className="mt-6 flex items-center justify-between">
//                         <p className="text-sm font-medium text-gray-900">Total</p>
//                         <span className="text-lg font-semibold">{calculateSubtotal()} {CURRENCY}</span>
//                     </div>

//                     <p className="mt-8 text-lg font-medium">Shipping Methods</p>
//                     <form className="mt-5 grid gap-6">
//                         {/* Shipping options here */}
//                     </form>
//                 </div>
//                 <div className="px-4 pt-8">
//                         <div>
//                             <label htmlFor="payment-option" className="block text-sm font-medium">Payment Option</label>
//                             <div className="mt-2">
//                                 <div className="flex items-center">
//                                     <input
//                                         id="visa"
//                                         type="radio"
//                                         name="payment-option"
//                                         value="visa"
//                                         checked={selectedPaymentOption === 'visa'}
//                                         onChange={handlePaymentOptionChange}
//                                         className="mr-2"
//                                     />
//                                     <label htmlFor="visa" className="cursor-pointer flex items-center">
//                                         <img className="w-10 h-10 object-contain mr-2 rounded-lg" src="https://pbs.twimg.com/profile_images/1432789190257909773/U_QLhKWv_400x400.png" alt="Visa Card" />
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center mt-4">
//                                     <input
//                                         id="paypal"
//                                         type="radio"
//                                         name="payment-option"
//                                         value="paypal"
//                                         checked={selectedPaymentOption === 'paypal'}
//                                         onChange={handlePaymentOptionChange}
//                                         className="mr-2"
//                                     />
//                                     <label htmlFor="paypal" className="cursor-pointer flex items-center">
//                                         <img className="w-10 h-10 object-contain mr-2 rounded-lg" src="https://filecache.mediaroom.com/mr5mr_paypal/177465/pp_h_rgb_logo_tn.jpg" alt="PayPal" />
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center mt-4">
//                                     <input
//                                         id="crypto"
//                                         type="radio"
//                                         name="payment-option"
//                                         value="crypto"
//                                         checked={selectedPaymentOption === 'crypto'}
//                                         onChange={handlePaymentOptionChange}
//                                         className="mr-2"
//                                     />
//                                     <label htmlFor="crypto" className="cursor-pointer flex items-center">
//                                         <img className="w-10 h-10 object-contain mr-2 rounded-lg" src="https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg" alt="Crypto" />
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         <>
//                             <button onClick={handleGoBackClick} type="button" className="mb-3 w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-black border rounded-lg gap-x-2 sm:w-auto hover:text-black hover:bg-white dark:text-black dark:border-gray-700">
//                                 <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
//                                 </svg>
//                                 <span>Go back</span>
//                             </button>

//                             {selectedPaymentOption === 'visa' && <p>Crypto Payment Component</p>}
                          
//                             {selectedPaymentOption === 'paypal' && <Paypal calculateSubtotal={calculateSubtotal}/> }
//                             {selectedPaymentOption === 'crypto' && <p>Crypto Payment Component</p>}
//                         </>
//                     )}
//                     <div className="mt-6 flex items-center justify-between">
//                         <p className="text-sm font-medium text-gray-900">Total</p>
//                         <span className="text-lg font-semibold">{calculateSubtotal()} {CURRENCY}</span>
//                     </div>
//                     <button className="mt-4 mb-2 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePaymentSubmit}>Proceed</button>

//                     <StripeCheckout
//                                     name="Lama Shop"
//                                     image="https://yourimageurl.com/logo.png" // Replace with your logo URL
//                                     billingAddress
//                                     shippingAddress
//                                     description={`Your total is ${calculateSubtotal()} ${CURRENCY}`}
//                                     amount={calculateSubtotal() * 100} // Amount should be in cents
//                                     token={onToken}
//                                     stripeKey={KEY}>
//                     <button className="mt-4 mb-2 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" >Proceed</button>

//                     </StripeCheckout>


// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// // Renders errors or successfull transactions on the screen.
// function Message({ content }) {
//   return <p>{content}</p>;
// }

// function App() {
//   const initialOptions = {
//     "client-id": "test",
//     "enable-funding": "venmo",
//     "disable-funding": "",
//     country: "US",
//     currency: "USD",
//     "data-page-type": "product-details",
//     components: "buttons",
//     "data-sdk-integration-source": "developer-studio",
//   };

//   const [message, setMessage] = useState("");

//   return (
//     <div className="App">
//       <PayPalScriptProvider options={initialOptions}>
//         <PayPalButtons
//           style={{
//             shape: "rect",
//             layout: "vertical",
//             color: "gold",
//             label: "paypal",
//           }}
//           createOrder={async () => {
//             try {
//               const response = await fetch("/api/orders", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 // use the "body" param to optionally pass additional order information
//                 // like product ids and quantities
//                 body: JSON.stringify({
//                   cart: [
//                     {
//                       id: "YOUR_PRODUCT_ID",
//                       quantity: "YOUR_PRODUCT_QUANTITY",
//                     },
//                   ],
//                 }),
//               });

//               const orderData = await response.json();

//               if (orderData.id) {
//                 return orderData.id;
//               } else {
//                 const errorDetail = orderData?.details?.[0];
//                 const errorMessage = errorDetail
//                   ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
//                   : JSON.stringify(orderData);

//                 throw new Error(errorMessage);
//               }
//             } catch (error) {
//               console.error(error);
//               setMessage(`Could not initiate PayPal Checkout...${error}`);
//             }
//           }}
//           onApprove={async (
//             data,
//             actions
//           ) => {
//             try {
//               const response = await fetch(
//                 `/api/orders/${data.orderID}/capture`,
//                 {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                 }
//               );

//               const orderData = await response.json();
//               // Three cases to handle:
//               //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
//               //   (2) Other non-recoverable errors -> Show a failure message
//               //   (3) Successful transaction -> Show confirmation or thank you message

//               const errorDetail = orderData?.details?.[0];

//               if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
//                 // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
//                 // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
//                 return actions.restart();
//               } else if (errorDetail) {
//                 // (2) Other non-recoverable errors -> Show a failure message
//                 throw new Error(
//                   `${errorDetail.description} (${orderData.debug_id})`
//                 );
//               } else {
//                 // (3) Successful transaction -> Show confirmation or thank you message
//                 // Or go to another URL:  actions.redirect('thank_you.html');
//                 const transaction =
//                   orderData.purchase_units[0].payments.captures[0];
//                 setMessage(
//                   `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
//                 );
//                 console.log(
//                   "Capture result",
//                   orderData,
//                   JSON.stringify(orderData, null, 2)
//                 );
//               }
//             } catch (error) {
//               console.error(error);
//               setMessage(
//                 `Sorry, your transaction could not be processed...${error}`
//               );
//             }
//           }} 
//         />
//       </PayPalScriptProvider>
//       <Message content={message} />
//     </div>
//   );
// }

// export default App; 

//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default CheckoutPage;

// function MinusIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M5 12h14" />
//       </svg>
//     );
//   }
// function PlusIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M5 12h14" />
//         <path d="M12 5v14" />
//       </svg>
//     );
//   }
  
//   function TrashIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M3 6h18" />
//         <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//         <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//       </svg>
//     );
//   }
  
//   function XIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M18 6 6 18" />
//         <path d="m6 6 12 12" />
//       </svg>
//     );
//   }