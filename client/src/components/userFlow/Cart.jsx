import { Button } from "@mui/material";
import { setcart } from "../../redux/SideBar/sideBarSlice";
import { useDispatch } from "react-redux";
import {
  useAddcartMutation,
  useGetcartQuery,
  useRemovecartMutation,
  useUpdateQuantityMutation,
} from "../../redux/services/cartApi";
import { useEffect } from "react";

export default function Cart() {
  const userId = localStorage.getItem('UserId')
  const { data: carts, refetch } = useGetcartQuery(userId);
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removecart] = useRemovecartMutation();
  useEffect(() => {
    // Refetch cart data every time the component is rendered
    refetch();
  }, [refetch]);
  
 

  const dispatch = useDispatch();
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
 
  const handleCloseCart = () => {
    dispatch(setcart());
  };

  const calculateSubtotal = () => {
    return products
      ?.reduce((total, item) => total + item.newPrice * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div
      key="1"
      className="fixed top-0 right-0 z-50 h-full w-full max-w-md overflow-hidden bg-white shadow-lg dark:bg-gray-950 sm:rounded-lg sm:border sm:border-gray-200 dark:border-gray-800"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(setcart())}
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close cart</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
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
                      userId,
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
                      userId,
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
                      userId,
                      productId: product.productId,
                    })
                  }
                >
                  <TrashIcon className="h-5 w-5" />
                  <span className="sr-only">Remove product</span>
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="border-t px-6 py-4 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total</span>
            <span className="text-lg font-semibold">{calculateSubtotal()} MAD</span>
          </div>
          <div className="mt-4 flex gap-2">
            <Button
              className="flex-1 "
              size="lg"
              variant="contained"
              color="primary"
              sx={{ flex: 1 }}
            >
              Checkout
            </Button>
            <Button
              size="lg"
              variant="outlined"
              sx={{ color: "primary.main", borderColor: "primary.main" }}
            >
              Continue shopping
            </Button>
          </div>
        </div>
      </div>
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
