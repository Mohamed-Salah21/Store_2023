import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../components/httpsServices";
const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: () => ({}),
      providesTags: ["Cart"],
    }),
  }),
});
