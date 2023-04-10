import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from "../components/httpsServices";
const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["Cart"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) =>
      headers.set("Authentication", localStorage.token),
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/cart/order/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["cartProducts"],
    }),
  }),
});
export const { useCreateOrderMutation } = cartApi;
export default cartApi;
