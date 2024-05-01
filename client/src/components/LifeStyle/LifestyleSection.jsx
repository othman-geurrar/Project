import React, { useEffect } from 'react';
import { useDeleteLifeStyleMutation, useGetAllLifeStyleQuery } from '../../redux/services/LifeStyleData';



const LifestyleSection = () => {
  const { data , isLoading , isError , refetch } = useGetAllLifeStyleQuery();
  const [deleteLifeStyle , {data:deleteData , isLoading:loading , isError:err}] = useDeleteLifeStyleMutation();

  useEffect(() => {
    // This effect will refetch data whenever deleteData changes, indicating a successful deletion
    if (deleteData) {
      refetch(); // Refetch data
    }
  }, [deleteData, refetch]);


  if (isError) {
    return <div>Something went wrong...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  

  const handleDelete = async (id) => {
    try {
      await deleteLifeStyle(id);
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(data.LifeStyle);
  const refetchLifestyles = () => {
    refetch(); // Refetch data after adding a new lifestyle
  };

  return (
    <>
     
    {data && <div className="md:col-span-2 p-2 ml-4">
    
      {data.LifeStyle.map((item, index) => (
        <div key={index} className=" p-4 ">
          <div className="flex justify-center">
            <div className="block rounded-lg justify-center h-fit bg-slate-200 shadow-secondary-2 dark:bg-surface-dark dark:text-white text-surface md:max-w-5xl">
              <div className=" overflow-hidden bg-cover p-2">
                <img
                  className="rounded-t-lg"
                  src="/src/assets/img/anime-style-bg.jpg"
                  alt={item.title}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2  font-bold leading-tight">
                  {item.LifeStyleName}
                </h3>
                <div>
                <span className="font-semibold  mb-3">LifeStyleID : <span className="text-xm font-medium">{item.LifeStyleID}</span></span>
                </div>
                <span className="font-semibold mt-4 mb-2">Description :</span>
                <p className="mb-4 mt-2 text-base">{item.Content.story}</p>
                
              </div>
              <div className="p-2 ">
                <button className="bg-teal-500 mr-3 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-teal-400 hover:text-slate-100">
                  View
                </button>
                <button className="bg-red-600 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-red-400 hover:text-slate-100 " onClick={() => { handleDelete(item.LifeStyleID) }}> <span className=" text-white">Delete</span> </button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>}
    </>
  );
};

export default LifestyleSection;
