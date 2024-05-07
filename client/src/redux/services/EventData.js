import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/events",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // get All lifeStyle
    getAllevents: builder.query({
      query: () => ({
        url: "/getAll",
        method: "GET",
      }),
    }),
    // get lifeStyle by id
    getEventById: builder.query({
      query: (id) => ({
        url: `/getEvent/${id}`,
        method: "GET",
      }),
    }),
    // add lifeStyle
    addEvent: builder.mutation({
      query: (events) => ({
        url: "/addEvent",
        method: "POST",
        body: events,
        // headers: {
        // 'Content-Type': 'application/json', },
      }),
    }),
    // update lifeStyle
    updateEvent: builder.mutation({
      query: ({id, event}) => ({
        url: `/update/${id}`,
        method: "Put",
        body: event,
      }),
    }),
    // delete lifeStyle
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the generated hooks for using the login endpoint
export const {
  useGetAlleventsQuery,
  useGetEventByIdQuery,
  useAddEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;

