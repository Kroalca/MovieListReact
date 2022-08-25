import { PopularMoviesList } from "../../libraries/movies/types"
import { useGetPopularMoviesQuery } from "../../libraries/store/apiSlice"
import { MovieCard } from "../components/MovieCard"
import { CheckRequest } from "../shared/components/CheckRequest"
import { MainLayout } from "../shared/layout/MainLayout"
import './PopularMoviesPage.scss'

interface Props {
    movies?: PopularMoviesList
    isLoading: boolean
    isError: boolean
    refetch: () => void
}

const PopularMovies = ({ movies, isLoading, isError, refetch }: Props): JSX.Element => {
    return (
        <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
            <div className="movies-list">
                { movies?.results.map(movie => <MovieCard key={movie.id} movie={movie}/>) }
            </div>
        </CheckRequest>
    )
}


export const PopularMoviesPage = (): JSX.Element => {
    const {data: movies, isLoading, isError, refetch} = useGetPopularMoviesQuery()
    return (
        <MainLayout>
            <PopularMovies movies={movies} isLoading={isLoading} isError={isError} refetch={refetch}/>
        </MainLayout>
    )
}