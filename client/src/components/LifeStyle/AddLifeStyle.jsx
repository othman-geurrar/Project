import { useAddLifeStyleMutation } from '../../redux/services/LifeStyleData'

const AddLifeStyle = () => {
    const [addLifeStyle , { data , isLoading , error }] = useAddLifeStyleMutation();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }
    const handleAddLifeStyle = async () => {
        try {
            const newLifeStyle = {
                LifeStyleName: "Anime",
                styleType: "Fashion"
            };
            const response = await addLifeStyle(newLifeStyle);
            console.log(response.data); // Assuming response contains the data
            
        } catch (err) {
            console.log(err);
        }
    };
    

  return (
    <div className='flex flex-wrap mt-10 mx-20 gap-6'>
        
            
            <button className=" bg-slate-200 p-2 rounded-xl" onClick={handleAddLifeStyle} disabled={isLoading} >Add Life Style</button>
        
    </div>
  )
}

export default AddLifeStyle