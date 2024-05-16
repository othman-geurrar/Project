import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductComponent = () => {
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const products = {
    button1: [
        {
          title: 'Product A',
          image: 'https://images.pexels.com/photos/6050919/pexels-photo-6050919.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          price: 10,
        },
        {
          title: 'Product B',
          image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 20,
        },
        {
          title: 'Product C',
          image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 15,
        },
        {
          title: 'Product A',
          image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 10,
        },
        {
          title: 'Product C',
          image: 'https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          price: 15,
        },
        {
          title: 'Product C',
          image: 'https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          price: 15,
        },
        {
          title: 'Product C',
          image: 'https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          price: 15,
        },
        {
          title: 'Product C',
          image: 'https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          price: 15,
        },
      ],
      button2: [
        {
          title: 'Product X',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          price: 25,
        },
        {
          title: 'Product Y',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          price: 30,
        },
        {
          title: 'Product Z',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          price: 22,
        },
        {
          title: 'Product X',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          price: 25,
        },
        {
          title: 'Product Y',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          price: 30,
        },
        {
          title: 'Product Z',
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          price: 22,
        },
      ],
      button3: [
        {
          title: 'Product 1',
          image: 'product_1.jpg',
          price: 18,
        },
        {
          title: 'Product 2',
          image: 'product_2.jpg',
          price: 12,
        },
        {
          title: 'Product 3',
          image: 'product_3.jpg',
          price: 16,
        },
      ],
  };

  return (
    <div>
      <div className='grid grid-cols-3 text-center mb-10'>
        <div>
          <button
            className={`transition-all duration-300 font-Kalam font-semibold  text-xl text-gray-700 ${activeButton === 'button1' ? 'border-b-2 border-black' : ''}`}
            onClick={() => handleButtonClick('button1')}
          >
            New Arrivals
          </button>
        </div>
        <div>
          <button
            className={`transition-all duration-300 font-Kalam font-semibold  text-xl text-gray-700 ${activeButton === 'button2' ? 'border-b-2 border-black' : ''}`}
            onClick={() => handleButtonClick('button2')}
          >
            Best Sellers
          </button>
        </div>
        <div>
          <button
            className={`transition-all duration-300 font-Kalam font-semibold  text-xl text-gray-700 ${activeButton === 'button3' ? 'border-b-2 border-black' : ''}`}
            onClick={() => handleButtonClick('button3')}
          >
            Best Offers
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 gap-span-2 justify-center align-middle">
        {activeButton && products[activeButton].map((product, index) => (
          <div className='grid gap-2 h-80 md:h-fit w-fit py-2 justify-center items-center' key={index}>
            <ProductCard title={product.title} image={product.image} price={product.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
