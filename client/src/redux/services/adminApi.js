import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AdminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/admin',
        credentials:'include',
        }),
        endpoints: (builder) => ({
            // register admin
            addAdmin: builder.mutation({
                query: (formData) => ({
                    url: '/register',
                    method: 'POST',
                    body: formData
                })
            })
    })
})

export const { useAddAdminMutation } = AdminApi;