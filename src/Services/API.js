// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleAPI = createApi({
  tagTypes: ['pruducts', 'comments', 'articles'],
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ['products'],
    }),
    getProductComments: builder.query({
      query: (id) => `products/${id}/comments`,
      providesTags: ['comments'],
    }),
    createArticle: builder.mutation({
      query: (data) => ({
        url: '/articles',
        method: "POST",
        body: data
      }),
      invalidatesTags: ['articles'],
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: `products/${data.id}/comments`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['comments'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductCommentsQuery, useCreateArticleMutation, usePostCommentMutation } = articleAPI