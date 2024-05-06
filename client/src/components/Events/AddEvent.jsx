import { useAddEventMutation } from "../../redux/services/EventData";

const AddEvent = () => {
  const [addEvent, { data, isLoading, error }] = useAddEventMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const handleAddEvent = async () => {
    try {
      const newEvent = {
        EventName: "",
        Description: "",
      };
      const response = await addEvent(newEvent);
      console.log(response.data); // Assuming response contains the data
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-wrap mt-10 mx-20 gap-6">
      <button
        className=" bg-slate-200 p-2 rounded-xl"
        onClick={handleAddEvent}
        disabled={isLoading}
      >
        Add Event
      </button>
    </div>
  );
};

export default AddEvent;
