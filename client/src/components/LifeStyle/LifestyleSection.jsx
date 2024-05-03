import React, { useEffect, useState } from 'react';
import { useDeleteLifeStyleMutation, useGetAllLifeStyleQuery } from '../../redux/services/LifeStyleData';
import { AddFormLs } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { setShowEditForm } from '../../redux/formState/form'



const LifestyleSection = () => {
  const { data , isLoading , isError , refetch } = useGetAllLifeStyleQuery();
  const [deleteLifeStyle , {data:deleteData , isLoading:loading , isError:err}] = useDeleteLifeStyleMutation();
  const [editingLifestyle, setEditingLifestyle] = useState(null);
  // const [showEditForm, setShowEditForm] = useState(false); // State to toggle edit form
  const showEditForm = useSelector((state) => state.form.showEditForm);
  const dispatch = useDispatch();

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

  const handleEdit = (item) => {
    setEditingLifestyle(item);
    dispatch(setShowEditForm());
  }

  console.log(data.LifeStyle);
  const refetchLifestyles = () => {
    refetch(); // Refetch data after adding a new lifestyle
  };

  return (
    <>
    {showEditForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-200 p-8 rounded shadow-lg">
            <button
              onClick={() => dispatch(setShowEditForm())}
              className="absolute top-15 right-115 mt-4 text-gray-600 hover:text-gray-800 text-teal-600 rounded-full text-xl"
            >
              Close
            </button>
            <h2 className="text-xl font-bold mb-4 text-teal-600">Edit Lifestyle</h2>
            <AddFormLs refetchLifestyles={refetchLifestyles} editingLifestyle={editingLifestyle} setEditingLifestyle={setEditingLifestyle} />
          </div>
        </div>
      )}
     
    {data && <div className="md:col-span-2 p-2 ml-4">
    
      {data.LifeStyle.map((item, index) => (
        <div key={index} className=" p-4 ">
          <div className="flex justify-center">
            <div className="block rounded-lg justify-center h-fit bg-slate-200 shadow-secondary-2 dark:bg-surface-dark dark:text-white text-surface md:max-w-5xl">
              <div className=" overflow-hidden bg-cover p-2">
                <img
                  className="rounded-t-lg"
                  src={item.ImageURL}
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
                
                <button className="bg-slate-500 mr-3 rounded-xl p-2 min-w-20 text-slate-200 hover:bg-slate-400 hover:text-slate-100" onClick={() => handleEdit(item)}>Edit</button>
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