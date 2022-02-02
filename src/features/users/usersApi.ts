import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { User } from "./types"

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUserByID: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
})

export const { useGetUserByIDQuery } = userApi
