
import { Link } from "react-router-dom";

export default function AmineCart({
  name,
  imageURL,
  stars,
  oldPrice,
  newPrice,
  id,
}) {
  return (
    <div className="relative group  w-[300px]  flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute top-4 right-4 z-10">
        <Link to={`/products/${id}`}>
          <a className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 hover:bg-gray-500 text-gray-50  focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300">
            <EyeIcon className="w-5 h-5" />
            <span className="sr-only">View product</span>
          </a>
        </Link>
      </div>
      <img
        alt="Product Image"
        className="h-[150px] w-full object-cover object-center group-hover:scale-120 transition-transform duration-300"
        src={imageURL[0]}
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              className={`w-5 h-5 ${
                index < stars
                  ? "fill-yellow-500"
                  : "fill-muted stroke-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({stars})
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through mr-2 dark:text-gray-400">
            ${oldPrice}
          </span>
          <span className="text-xl font-bold">${newPrice}</span>
        </div>
        
      </div>
    </div>
  );
}

function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function StarIcon(props) {
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