import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ total, limit, currentPage }) => {
  const totalPages = Math.ceil(total / limit);

  const nextPage = useMemo(() => {
    return `?p=${currentPage + 1}`;
  }, [currentPage, limit]);
  
  const prevPage = useMemo(() => {
    return `?p=${currentPage - 1}`;
  }, [currentPage, limit]);

  const pagesArray = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  return (
    <div>
      <nav aria-label="Page navigation example" className='flex items-center justify-center py-2'>
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <Link
              to={prevPage}
              className={`flex items-center justify-center px-4 h-10 leading-tight 
                text-gray-500 bg-white border border-gray-300 rounded-l-lg
                hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </Link>
          </li>
          {pagesArray.map((page) => (
            <li key={page}>
              <Link
                to={`?p=${page}`}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage !== page
                    ? 'text-gray-500 bg-white border border-gray-300'
                    : 'text-blue-600 border-blue-300 bg-blue-50'
                } border hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
              >
                {page}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={nextPage}
              className={`flex items-center justify-center px-4 h-10 leading-tight 
                text-gray-500 bg-white border border-gray-300 rounded-r-lg
                hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
