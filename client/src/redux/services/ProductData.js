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
            query: (page) => ({
                url: `/getAll?p=${page}`,
                method: 'GET',
            })
        })
    })
})

export const { useGetAllProductsQuery } = ProductApi
