import axios from "axios";
import { useState } from "react";
const creatproductURL = "http://localhost:3000/product/newer";

const ProductForm = () => {
  const [productdata, setproductdata] = useState({
    name: "",
    description: "",
    color: [],
    size: [],
    imageURL: "",
    category: "",
    inStock: "",
  });

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setproductdata((prevState) => ({
        ...prevState,
        color: [...prevState.color, value],
      }));
    } else {
      setproductdata((prevState) => ({
        ...prevState,
        color: prevState.color.filter((color) => color !== value),
      }));
    }
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setproductdata((prevState) => ({
        ...prevState,
        size: [...prevState.size, value],
      }));
    } else {
      setproductdata((prevState) => ({
        ...prevState,
        size: prevState.size.filter((size) => size !== value),
      }));
    }
  };

  const Handlerphoto = (e) => {
    setproductdata((prevstate) => ({
      ...prevstate,
      imageURL: e.target.files[0],
    }));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setproductdata((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageURL", productdata.imageURL);
    formData.append("name", productdata.name);
    formData.append("description", productdata.description);
    formData.append("price", productdata.price);
    formData.append("category", productdata.category);
    formData.append("inStock", productdata.inStock);
    formData.append("size", productdata.size);
    formData.append("color", productdata.color);
    axios
      .post(creatproductURL, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="max-w-lg mx-auto"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="name"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={productdata.name}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="description"
            name="description"
            value={productdata.description}
            onChange={(e) => onChangeHandler(e)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="desccription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="price"
            name="price"
            value={productdata.price}
            onChange={(e) => onChangeHandler(e)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="category"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={productdata.category}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <label
            htmlFor="Category"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            category
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="color"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Select Color
          </label>
          <div>
            <input
              type="checkbox"
              id="red"
              name="color"
              value="red"
              onChange={handleColorChange}
            />
            <label htmlFor="red">Red</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="blue"
              name="color"
              value="blue"
              onChange={handleColorChange}
            />
            <label htmlFor="blue">Blue</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="green"
              name="color"
              value="green"
              onChange={handleColorChange}
            />
            <label htmlFor="green">Green</label>
          </div>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="inStock"
              value="true"
              checked={productdata.inStock === "true"}
              onChange={(e) => onChangeHandler(e)}
            />{" "}
            In Stock
          </label>
          <label>
            <input
              type="radio"
              name="inStock"
              value="false"
              checked={productdata.inStock === "false"}
              onChange={(e) => onChangeHandler(e)}
            />{" "}
            Out of Stock
          </label>
        </div>
        <br></br>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="size"
            className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Select Size
          </label>
          <br></br>
          <div>
            <input
              type="checkbox"
              id="small"
              name="size"
              value="small"
              onChange={handleSizeChange}
            />
            <label htmlFor="small">Small</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="medium"
              name="size"
              value="medium"
              onChange={handleSizeChange}
            />
            <label htmlFor="medium">Medium</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="large"
              name="size"
              value="large"
              onChange={handleSizeChange}
            />
            <label htmlFor="large">Large</label>
          </div>
        </div>

        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          name="imagURL"
          accept=".jpg,.png, .jpeg"
          type="file"
          onChange={(e) => Handlerphoto(e)}
        />
        <div
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          A profile picture is useful to confirm your are logged into your
          account
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
