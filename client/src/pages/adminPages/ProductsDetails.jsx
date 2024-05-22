import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOneProduct } from "../../redux/Products/productsSlice";
import { useEffect } from "react";
const ProductsDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const {
    name,
    LifeStyleName,
    category,
    price,
    productQuantity,
    inStock,
    size,
    color,
    imageURL = [],
  } = useSelector((state) => state.Products.currentproduct);
  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [dispatch, productId]);

  return (
    <div
      className=" pb-[18px] pt-[40px] text-black  flex justify-center "
      style={{ fontFamily: "cursive" }}
    >
      <div className="  rounded-xl  ">
        <div className="  p-[10px] flex rounded-xl justify-center h-[75vh]  gap-[40px]   ">
          {/* bcp-image */}
          {/* <div
            className="flex flex-col  gap-[20px]  overflow-auto "
            style={{ scrollbarWidth: "none" }}
          >
            <div className="w-[200px]">
              <img
                className="rounded-xl "
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[200px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[200px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[200px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[200px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div> */}
          {/* center-image */}
          <div className="w-[480px]">
            <img
              className="object-cover object-center w-full h-full rounded-xl"
              src={imageURL[0]}
              alt=""
            />
          </div>
          {/* description */}
          <div className=" px-[10px] ">
            <div className=" h-full  flex flex-col gap-[10px]">
              {/* Product_Title */}
              <div className="font-productTitle   flex justify-center bg-teal-500 text-white  text-[25px]">
                {name}
              </div>
              <div>{LifeStyleName}</div>
              {/* Product_Price */}
              <div className="rounded-xl  " style={{ fontSize: "25px" }}>
                {price} <i className="fa-solid fa-dollar-sign"></i>
              </div>
              {/* Product_Quantity */}
              <div className="" style={{ fontSize: "25px" }}>
                {productQuantity} <i className="fa-solid fa-boxes-stacked"></i>
              </div>
              {/* Product_description */}
              <div className="w-[360px] my-[10px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque pariatur, aspernatur quia praesentium qui adipisci
              </div>
              {/* Product_Size */}
              <div className="flex gap-[5px]">
                {size &&
                  size.map((item) => {
                    return (
                      <>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          {item.value}
                        </span>
                      </>
                    );
                  })}
              </div>
              {/* Product_Category */}
              <div>{category}</div>
              {/* Product_Stock */}

              {inStock && (
                <div className="bg-green-500 text-white  text-xs font-medium  px-6 py-1 text-center">
                  in Stock
                </div>
              )}
              {!inStock && (
                <div className="bg-red-500 text-white  text-xs font-medium  px-6 py-1 text-center">
                  out of Stock
                </div>
              )}
              {/* Product_Color */}
              <div className="flex gap-[10px]">
                {color &&
                  color.map((item) => {
                    return (
                      <>
                        <i
                          className="fa-solid fa-circle  text-[22px] transition-all duration-800  hover:text-[28px]"
                          style={{ color: item }}
                        ></i>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
