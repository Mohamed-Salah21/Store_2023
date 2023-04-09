import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query";
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
    addOrder: builder.mutation({
      query: (payload) => ({
        url: "/cart/order/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const { useAddOrderMutation } = cartApi;
export default cartApi;
