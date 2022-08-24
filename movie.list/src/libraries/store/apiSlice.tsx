import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie, PopularMoviesList } from '../movies/types'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<PopularMoviesList, void>({
            query: () => ({
                url: 'movie/popular',
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                }
            })
        }),
        getMovie: builder.query<Movie, string>({
            query: (id) => ({
                url: `movie/${id}`,
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                }
            })
        })
    })
})

export const { useGetPopularMoviesQuery, useGetMovieQuery } = apiSlice