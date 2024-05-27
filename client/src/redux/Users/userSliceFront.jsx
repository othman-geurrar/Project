import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Query
export const UserApi = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users",
    credentials: "include",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // Get One User
    GetOneUser: builder.query({
      query: (id) => ({
        url: `/GetOneUser/${id}`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    // Edit Account
    EditAccount: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/update/${id}`,
        body: formData,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
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
export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useGetOneUserQuery,
  useEditAccountMutation,
} = UserApi;
