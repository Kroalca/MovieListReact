import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie, PopularMoviesList } from '../movies/types'
import { LoginPayload, LogoutPayload } from '../user/payload'
import { Auntetication, DeleteSession, UserSession } from '../user/types'

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
        }),
        getAuthentication: builder.query<Auntetication, void>({
            query: () => ({
                url: 'authentication/token/new',
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                }
            })
        }),
        createSessionWithLogin: builder.mutation<UserSession, LoginPayload>({
            query: (LoginPayload) => ({
                url: 'authentication/token/validate_with_login',
                method: 'POST',
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                },
                body: LoginPayload
            })
        }),
        deleteSession: builder.mutation<DeleteSession, LogoutPayload>({
            query: (LogoutPayload) => ({
                url: 'authentication/session',
                method: 'DELETE',
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                },
                body: LogoutPayload
            })
        })
    })
})

export const { useGetPopularMoviesQuery, useGetMovieQuery, useLazyGetAuthenticationQuery, useCreateSessionWithLoginMutation, useDeleteSessionMutation } = apiSlice