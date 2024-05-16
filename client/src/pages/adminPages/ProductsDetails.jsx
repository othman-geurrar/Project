const ProductsDetails = () => {
  return (
    <div
      className=" py-[18px]  text-black  flex justify-center "
      style={{ fontFamily: "cursive" }}
    >
      <div
        className="  rounded-xl  "
        // style={{ backgroundColor: "rgb(191 214 225)" }}
      >
        <div className="  p-[10px] flex rounded-xl justify-center  gap-[20px]   ">
          {/* bcp-image */}
          <div
            className="flex flex-col  gap-[20px] h-[75vh] overflow-auto "
            style={{ scrollbarWidth: "none" }}
          >
            <div className="w-[240px]">
              <img
                className="rounded-xl "
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[240px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[240px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[240px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="w-[240px]">
              <img
                className="rounded-xl"
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=pexels-mnzoutfits-1598505.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
          {/* center-image */}
          <div className="w-[360px] ">
            <img
              className="object-cover w-full h-full rounded-xl"
              src="https://i.pinimg.com/originals/b8/01/d8/b801d86dcd8f8cfb3086a906fe72fef8.jpg"
              alt=""
            />
          </div>
          {/* description */}
          <div className=" px-[10px] ">
            <div className=" h-full  flex flex-col gap-[10px]">
              {/* Product_Title */}
              <div className="font-productTitle   flex justify-center bg-teal-500 text-white  text-[25px]">
                sport fashion
              </div>
              <div>Prodcut Amine Style</div>
              {/* Product_Price */}
              <div
                className="rounded-xl  "
                style={{ fontSize: "25px" }}
              >
                225.00 <i className="fa-solid fa-dollar-sign"></i>
              </div>
              {/* Product_Quantity */}
              <div className="" style={{ fontSize: "25px" }}>
                21 <i className="fa-solid fa-boxes-stacked"></i>
              </div>
              {/* Product_description */}
              <div className="w-[360px] my-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque pariatur, aspernatur quia praesentium qui adipisci
              </div>
              {/* Product_Size */}
              <div className="flex gap-[5px]">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Small
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Meduim
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Large
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  XLarge
                </span>
              </div>
              {/* Product_Category */}
              <div>CATEGORY</div>
              {/* Product_Stock */}
              <div className="bg-green-100 text-green-800  text-xs font-medium  px-6 py-1 text-center">
                in Stock
              </div>
              {/* Product_Color */}
              <div className="flex gap-[10px]">
                <i className="fa-solid fa-circle text-black text-[22px] transition-all duration-800  hover:text-[28px]"></i>
                <i className="fa-solid fa-circle text-red-500 text-[22px] transition-all duration-800  hover:text-[28px]"></i>
                <i className="fa-solid fa-circle text-green-500 text-[22px] transition-all duration-800  hover:text-[28px]"></i>
                <i className="fa-solid fa-circle text-yellow-500 text-[22px]  transition-all duration-800 hover:text-[28px] transition-all duration-1000 "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
