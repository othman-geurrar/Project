import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PaymentsApi = createApi({
    reducerPath: 'payments',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/payments',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getAllpayments: builder.query({
            query: () => ({
                url: '/getAll',
                method: 'GET',
            }),
        }),
        getpaymentsById: builder.query({
            query: (transactionId) => ({
                url: `/getPayment/${transactionId}`,
                method: 'GET',
            }),
        }),
        addpayments: builder.mutation({
            query: (payments) => ({
                url: '/addPayment',
                method: 'POST',
                body: payments,
                
            }),
        }),
      
        deletepayments: builder.mutation({
            query: (transactionId) => ({
                url: `/delete/${transactionId}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const { useGetAllpaymentsQuery , useGetpaymentsByIdQuery , useAddpaymentsMutation , useDeletepaymentsMutation } = PaymentsApi