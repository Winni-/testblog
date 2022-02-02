import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Post } from "./types"

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
  }),
})

export const { useGetPostsQuery } = postApi
