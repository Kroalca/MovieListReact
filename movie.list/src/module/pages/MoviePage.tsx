import { useParams } from "react-router-dom"
import { useGetMovieQuery } from "../../libraries/store/apiSlice"
import { MainLayout } from "../shared/layout/MainLayout"
import { Movie as MovieType } from "../../libraries/movies/types"
import { CheckRequest } from "../shared/components/CheckRequest"
import { MovieCard } from "../components/MovieCard"

interface Props {
    movie?: MovieType
    isLoading: boolean
    isError: boolean
    refetch: () => void
}

export const Movie = ({ movie, isLoading, isError, refetch }: Props): JSX.Element => {
    return (
        <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
            <div>
                {movie?.title}
            </div>
        </CheckRequest>
    )
}

export const MoviePage = (): JSX.Element => {
    const { id } = useParams()
    const {data: movie, isLoading, isError, refetch} = useGetMovieQuery(id || '')
    return (
        <MainLayout>
            <Movie movie={movie} isLoading={isLoading} isError={isError} refetch={refetch}/>
        </MainLayout>
    )

}