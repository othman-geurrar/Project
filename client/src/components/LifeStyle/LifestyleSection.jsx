import React from 'react';
import { useGetAllLifeStyleQuery } from '../../redux/services/LifeStyleData'


const LifestyleSection = ({ lifestyles }) => {
  const { data , isLoading , isError } = useGetAllLifeStyleQuery();
  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);


  return (
    <div className="md:col-span-2 p-2 ml-4">
      {lifestyles.map((item, index) => (
        <div key={index} className=" p-4 mt-4">
          <div className="flex justify-center">
            <div className="block rounded-lg justify-center h-fit bg-slate-200 shadow-secondary-2 dark:bg-surface-dark dark:text-white text-surface md:max-w-5xl">
              <div className="relative overflow-hidden bg-cover p-2">
                <img
                  className="rounded-t-lg"
                  src={item.imgSrc}
                  alt={item.title}
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 xl font-medium leading-tight">
                  {item.title}
                </h5>
                <span className="font-semibold mb-3">Description</span>
                <p className="mb-4 mt-4 text-base">{item.description}</p>
                <p className="text-base text-surface/75 dark:text-neutral-300">
                  <small>Last updated {item.lastUpdated}</small>
                </p>
              </div>
              <div className="p-2">
                <button className="bg-teal-500 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-teal-400 hover:text-slate-100">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LifestyleSection;
