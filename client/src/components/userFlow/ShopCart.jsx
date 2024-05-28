import React, { useState } from "react";
import {
  useGetcartQuery,
  useRemovecartMutation,
  useUpdateQuantityMutation,
} from "../../redux/services/cartApi";
import { IoAddOutline } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";

function ShopCart() {
  const { data: cart, refetch } = useGetcartQuery(6954);
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removecart] = useRemovecartMutation();

  const products = cart?.items;
  console.log(products);

  const [isCartOpen, setIsCartOpen] = useState(true);

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
      console.log('Item quantity updated successfully');
    } catch (error) {
      // setError('Failed to update item quantity');
      console.error('Failed to update item quantity:', error);
    } finally {
      // setLoading(false);
      console.log('done');
    }
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const calculateSubtotal = () => {
    return products
      ?.reduce((total, item) => total + item.newPrice * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      {isCartOpen && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleCloseCart}
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products?.map((item) => (
                              <li key={item.productId} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.imageURL}
                                    alt={`${item.name} image`}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{item.name}</a>
                                      </h3>
                                      <p className="ml-4">
                                        ${item.newPrice.toFixed(2)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {/* {item.color} */}
                                      <span className="mr-2 text-lg">
                                                <i
                                                  className="fa-solid fa-circle"
                                                  style={{ color: item.color }}
                                                ></i>
                                              </span>
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Quantity
                                      <span className="text-lg h-6 w-6 px-4 font-medium">
                                        <button
                                          className=" bg-slate-200 rounded-full h-6 w-6 pl-1 hover:bg-slate-300 "
                                          onClick={() =>
                                            handleUpdateQuantity({
                                              userId: 6954,
                                              productId: item.productId,
                                              quantity: item.quantity - 1,
                                            })
                                          }
                                        >
                                          {" "}
                                          <IoIosRemove />
                                        </button>{" "}
                                        {item.quantity}{" "}
                                        <button
                                          className=" bg-slate-200 rounded-full h-6 w-6 pl-1 hover:bg-slate-300"
                                          onClick={() =>
                                            handleUpdateQuantity({
                                              userId: 6954,
                                              productId: item.productId,
                                              quantity: item.quantity + 1,
                                            })
                                          }
                                        >
                                          {" "}
                                          <IoAddOutline />
                                        </button>
                                      </span>
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() =>
                                          handleRemoveItem({
                                            userId: 6954,
                                            productId: item.productId,
                                          })
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${calculateSubtotal()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
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
export default ShopCart;
