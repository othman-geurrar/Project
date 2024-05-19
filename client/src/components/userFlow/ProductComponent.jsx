import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductComponent = () => {
  const [activeButton, setActiveButton] = useState('button2');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const products = {
    button1: [
        {
          name: 'Product A',
          imageURL: ['https://images.pexels.com/photos/6050919/pexels-photo-6050919.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
          newPrice: 10,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Product B',
          imageURL: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
          newPrice: 20,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Product C',
          imageURL: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
          newPrice: 15,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Product A',
          imageURL: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
          newPrice: 10,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Product C',
          imageURL: ['https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
          newPrice: 400,
          oldPrice: 450,
          stars: 4,
        },
        {
          name: 'Product C',
          imageURL: ['https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
          newPrice: 250,
          oldPrice: 300,
          stars: 4,
        },
        {
          name: 'Product C',
          imageURL: ['https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
          newPrice: 150,
          oldPrice: 120,
          stars: 3,
        },
        {
          name: 'Product C',
          imageURL: ['https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
          newPrice: 200,
          oldPrice: 230,
          stars: 4,
        },
      ],
      button2: [
        {
          name: 'Metal T-Shirt',
          imageURL: ['http://res.cloudinary.com/duvf9j212/image/upload/v1716129532/Cloudinary-React/ygkbku0i1mztmvfawfwg.png'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Smart Watch ',
          imageURL: ['https://i.etsystatic.com/20270745/r/il/18f1d3/2948135574/il_794xN.2948135574_sf5e.jpg'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Jordan 4',
          imageURL: ['https://i.etsystatic.com/51640207/r/il/0ed79c/6021693559/il_794xN.6021693559_axyf.jpg'],
          newPrice: 350,
          oldPrice: 400,
          stars: 5,
        },
        {
          name: 'Pink Watch',
          imageURL: ['https://i.etsystatic.com/51971923/r/il/d760ee/5957142522/il_794xN.5957142522_3cjk.jpg'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Adidas Brown Shoulder Bag Cross Body Sports Bag',
          imageURL: ['https://i.etsystatic.com/37604007/r/il/2db9c2/6021887351/il_794xN.6021887351_7wxq.jpg'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Custom Name Necklace Birthday Gift for Her',
          imageURL: ['https://i.etsystatic.com/34379934/r/il/007248/4790987137/il_794xN.4790987137_ct6b.jpg'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Mens Bracelet, Stainless Steel Chain bracelet',
          imageURL: ['https://i.etsystatic.com/15975882/r/il/eeed21/3468920043/il_1140xN.3468920043_nijl.jpg'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        {
          name: 'Black Sunglasses Womens Sunglasses Gift For Her',
          imageURL: ['https://i.etsystatic.com/50598452/r/il/27c023/5996303190/il_1140xN.5996303190_jryd.jpg'],
          newPrice: 25,
          oldPrice: 15,
          stars: 4,
        },
        
      ],
      button3: [
        {
          name: 'Product 1',
          imageURL: 'product_1.jpg',
          newPrice: 18,
        },
        {
          name: 'Product 2',
          imageURL: 'product_2.jpg',
          newPrice: 12,
        },
        {
          name: 'Product 3',
          imageURL: 'product_3.jpg',
          newPrice: 16,
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
            <ProductCard name={product.name} imageURL={product.imageURL} newPrice={product.newPrice} oldPrice={product.oldPrice} stars={product.stars}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
