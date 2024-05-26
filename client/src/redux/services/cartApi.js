import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cart',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/cart',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        // get cart items
        getcart: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
        }),
        // add item to cart
        addcart: builder.mutation({
            query: (formData) => ({
                url: '/add',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Cart'],
        }),
        // remove item from cart
        removecart: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/remove`,
                method: 'DELETE',
                body: { userId, productId },
            }),
            invalidatesTags: ['Cart'],
        }),
        updateQuantity: builder.mutation({
            query: ({ userId, productId, quantity }) => ({
                url: `/update`,
                method: 'PUT',
                body: { userId, productId, quantity },
            }),
            invalidatesTags: ['Cart'],
        })
    }),
});

export const { useGetcartQuery, useAddcartMutation, useRemovecartMutation , useUpdateQuantityMutation } = cartApi;
