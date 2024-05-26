import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Query
export const UserApi = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // Get One User
    GetOneUser: builder.query({
      query: (id) => ({
        url: `/GetOneUser/${id}`,
        method: "GET",
      }),
    }),
    // Sign Up User
    SignUpUser: builder.mutation({
      query: (userdata) => ({
        url: "/register",
        body: userdata,
        method: "POST",
      }),
    }),
    //Sign In User
    SignInUser: builder.mutation({
      query: (userdata) => ({
        url: "/login",
        body: userdata,
        method: "POST",
      }),
    }),
  }),
});
export const { useSignUpUserMutation, useSignInUserMutation,useGetOneUserQuery } = UserApi;
