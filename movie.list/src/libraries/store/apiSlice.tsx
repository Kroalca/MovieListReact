import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
console.log(process.env.REACT_APP_API_KEY)

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getMovies: builder.query<any, void>({
            query: () => ({
                url: 'discover/movie',
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                }
            })
        })
    })
})

export const { useGetMoviesQuery } = apiSlice