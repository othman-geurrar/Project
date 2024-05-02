import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminAuthApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/admin' ,  credentials: 'include', }),
    endpoints: (builder) => ({
      loginAdmin: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
      }),
    }),
  });
  
  // Export the generated hooks for using the login endpoint
  export const { useLoginAdminMutation } = adminAuthApi;