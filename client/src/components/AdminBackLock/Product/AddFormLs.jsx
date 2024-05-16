// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as zod from "zod";
// import "react-datepicker/dist/react-datepicker.css";
// import { useAddLifeStyleMutation } from "../../redux/services/LifeStyleData";
// import { useNavigate } from "react-router-dom";

// const schema = zod.object({
//   LifeStyle_name : zod.string().min(4),
//   LifeStyle_Type : zod.string().min(4),
//   LifeStyle_Story : zod.string().min(4),
//   LifeStyle_imgurl : zod.string().min(4),
  

// });

// function AddFormLs() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//   });

//   return (
    
    
//   );
// }

// export default AddFormLs;