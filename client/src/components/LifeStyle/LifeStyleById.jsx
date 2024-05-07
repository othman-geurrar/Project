
import { useGetLifeStyleByIdQuery } from '../../redux/services/LifeStyleData';
import React  from 'react';


const id = "LifeStyle1002" ;

const LifeStyleById = () => {
    const { data, isLoading, isError } = useGetLifeStyleByIdQuery(id)
    console.log(data)
    console.log(isLoading)
    console.log(isError)
    if (isLoading){
        return <h1>Loading...</h1>
    }
    if (isError){
        return <h1>Error...</h1>
    }

  return (
    <div className='flex-col text-center items-center justify-center'>
       <h1 className=' text-teal-400 font-bold text-2xl text-center'>{data?.LifeStyleName}</h1>
       <h3 className=' text-teal-400 font-bold text-2xl text-center'>
        {data?.styleType}
       </h3>
       <p className='mx-20 my-10'> {data?.Content?.story} </p>
     
    </div>
  )
}

export default LifeStyleById