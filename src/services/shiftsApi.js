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
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `orders/${orderId}.json`,
        method: "DELETE",
      }),
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation,
  useDeleteOrderMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} = shiftsApi;
