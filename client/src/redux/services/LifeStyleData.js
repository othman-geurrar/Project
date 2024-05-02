import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lifeStyleApi = createApi({
    reducerPath: 'lifeStyle',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/lifeStyle',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        // get All lifeStyle
        getAllLifeStyle: builder.query({
            query: () => ({
                url: '/getAll',
                method: 'GET',
            }),
        }),
        // get lifeStyle by id
        getLifeStyleById: builder.query({
            query: (id) => ({
                url: `/getLifeStyle/${id}`,
                method: 'GET',
            }),
        }),
        // add lifeStyle
        addLifeStyle: builder.mutation({
            query: (lifeStyle) => ({
                url: '/addLifeStyle',
                method: 'POST',
                body: lifeStyle,
                // headers: {
                    // 'Content-Type': 'application/json', },
            }),
        }),
        // update lifeStyle
        updateLifeStyle: builder.mutation({
            query: ({id , lifeStyle}) => ({
                url: `/update/${id}`,
                method: 'PUT',
                body: lifeStyle,
                headers: { 'Content-Type': 'application/json' }
            }),
        }),
        // delete lifeStyle
        deleteLifeStyle: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const { useGetAllLifeStyleQuery , useGetLifeStyleByIdQuery , useAddLifeStyleMutation , useDeleteLifeStyleMutation, useUpdateLifeStyleMutation } = lifeStyleApi