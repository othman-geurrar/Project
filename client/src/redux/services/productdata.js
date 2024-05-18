import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/product",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    GetProduct: builder.query({
      query: () => ({
          url: '/getAll',
          method: 'GET',
      }),
  }),
    GetProductById: builder.query({
      query: (id) => ({
        url: `/getOne/${id}`,
        method: "GET",
      }),
    }),
   
  updateProduct: builder.mutation({
      query: ({id , lifeStyle}) => ({
          url: `/update/${id}`,
          method: 'PUT',
          body: lifeStyle,
          headers: { 'Content-Type': 'application/json' }
      }),
  }),
  // delete lifeStyle
  deleteProduct: builder.mutation({
      query: (id) => ({
          url: `/delete/${id}`,
          method: 'DELETE',
      }),
  }),
}),
})


export const {useGetProductByIdQuery}=ProductApi