import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:4000";
type productType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};
type productsResult = {
  success: boolean;
  message: string;
  products: productType[];
};
type singleProductResult = {
  suceess: true;
  message: string;
  product: productType;
};
const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["productsTags"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<productsResult, undefined>({
      query: () => `store23/v1/products`,
      providesTags: ["productsTags"],
    }),
    getSingleProduct: builder.query<singleProductResult, string | undefined>({
      query: (id) => `/store23/v1/products/${id}`,
      providesTags: ["productsTags"],
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
export default productsApi;
