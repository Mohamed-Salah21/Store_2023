import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../components/httpsServices";
type productType = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};
type productsResult = {
  success: boolean;
  message: string;
  products: productType[];
};
const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["productsTags"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<productsResult, undefined>({
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
