import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../components/httpsServices";
const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["productsTags"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queryParam) =>
        queryParam ? `/products?category=${queryParam}` : `/products`,
      providesTags: ["productsTags"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["productsTags"],
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
export default productsApi;
