import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProductApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/product',
        credentials:'include',
        }),
    endpoints: (builder) => ({
        // get All products
        getAllProducts: builder.query({
            query: ({page , search , min , value}) => ({
                url: `/getAll?p=${page}&search=${search}&min=${min}&maxprice=${value}`,
                method: 'GET',
            })
        }),
        getProductById: builder.query({
            query: (id) => ({
              url: `/getOne/${id}`,
              method: "GET",
            }),
          }),
          getProductsLifeStyle: builder.query({
            query: (LifeStyleName) => ({
              url: `/getProductsStyle/${LifeStyleName}`,
              method: "GET",
            }),
          }),
          getProductType: builder.query({
            query: (type) => ({
              url: `/New?type=${type}`, // appending type as a query parameter
              method: "GET",
            }),
          }),
          
    })
   
})

export const { useGetAllProductsQuery , useGetProductByIdQuery , useGetProductsLifeStyleQuery , useGetProductTypeQuery } = ProductApi
