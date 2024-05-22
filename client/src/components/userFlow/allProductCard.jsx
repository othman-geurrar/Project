
import React from 'react';


const AllProductCard = ({ name, imageURL, stars , oldPrice , newPrice }) => {
  return (
    <div>
      <div className="bg-white h-[410px] w-[300px] rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <img
          alt="Product Image"
          className="w-full h-[300px] w-fit object-cover"
          height={300}
          src={imageURL}
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${index < stars ? "fill-yellow-500" : "fill-muted stroke-muted-foreground"}`}
              />
            ))}
            <span className="text-sm text-gray-500 dark:text-gray-400">({stars})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">{`$${newPrice}`}</span>
            <span className="text-sm text-gray-500 line-through dark:text-gray-400">{`$${oldPrice}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;

const StarIcon= (props) => {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
