import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from "../components/httpsServices";
const favouritesApi = createApi({
  reducerPath: "favourites",
  tagTypes: ["Favourite"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) =>
      headers.set("Authentication", localStorage.token),
  }),
  endpoints: (builder) => ({
    likeProduct: builder.mutation({
      query: (id) => ({
        url: `/favourites/add/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Favourite"],
    }),
  }),
});
export const { useLikeProductMutation } = favouritesApi;
export default favouritesApi;
