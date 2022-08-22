import { useGetMoviesQuery } from "../../libraries/store/apiSlice"

const Movies = (): JSX.Element => {
    return (
        <></>
    )
}


export const MoviesPage = (): JSX.Element => {
    const {data: movies, isLoading, isError, refetch} = useGetMoviesQuery()
    return (
        <Movies />
    )
}