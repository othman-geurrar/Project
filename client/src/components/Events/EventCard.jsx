import { useEffect, useState } from "react";
import {
  useDeleteEventMutation,
  useGetAlleventsQuery,
  useUpdateEventMutation,
} from "../../redux/services/EventData";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../redux/formState/form";


const EventCard = () => {
  const { data, isLoading, isError, refetch } = useGetAlleventsQuery();
  const [deleteEvent] = useDeleteEventMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.events) {
      refetch();
    }
  }, [data, refetch]);

  if (isError) {
    return <div>something went wrong...</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      refetch();
    } catch (e) {
      console.log(e.message);
    }
  };


  const handleEdit = (event) => {
    dispatch(setShowForm())
    setEditedEvent(event);
  };

  return (
    <>
      {data && (
        <div>
          {data.events.map((event, index) => (
            <div
              key={index}
              className="card w-full card-side bg-base-100 shadow-xl gap-10 my-10"
            >
              <figure>
                <img
                  className="w-100 h-65 bg-cover"
                  src="https://www.anime-japan.jp/2023/img/index/img_sld-1_2023_e.jpg"
                  alt=""
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title font-bold">{event.EventName}</h2>
                <p>{event.Description}</p>
                <p> {event.EventID} </p>
                <p className="text-lg ">
                  <span className=" font-bold "> Date:</span> {event.EventDate}
                </p>
                <p>
                  <span className=" font-bold ">Location: </span>{" "}
                  {event.Location}
                </p>
                <div className=" justify-end">
                  <button
                    className="btn mr-2 bg-slate-400"
                    onClick={() => handleEdit(event)}
                  >
                    <span className=" text-white">Edit</span>
                  </button>
                  <button
                    className="btn mr-2 bg-red-600 hover:bg-red-400 "
                    onClick={() => handleDelete(event.EventID)}
                  >
                    {" "}
                    <span className=" text-white">Delete</span>{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EventCard;