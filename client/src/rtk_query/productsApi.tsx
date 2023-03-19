import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:4000/";
type productsResult = {
  success: boolean;
  message: string;
  products: {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  }[];
};
const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["productsTags"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<productsResult , undefined>({
      query: () => `ecommerce/products`,
      providesTags: ["productsTags"],
    }),
  }),
});
export const { useGetAllProductsQuery } = productsApi;
export default productsApi;
