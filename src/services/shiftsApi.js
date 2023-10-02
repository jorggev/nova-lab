import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../firebase";

export const shiftsApi = createApi({
  reducerPath: "shiftsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    GetProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  usegetProductsQuery,
  useGetProductsByCategoryQuery,
} = shiftsApi;
