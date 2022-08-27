import { useParams } from "react-router-dom"
import { useCreateRateMovieMutation, useGetMovieQuery } from "../../libraries/store/apiSlice"
import { Movie as MovieType } from "../../libraries/movies/types"
import { CheckRequest } from "../shared/components/CheckRequest"
import { getUrlImg, showAlert } from "../shared/utils"
import './MoviePage.scss'
import { useState } from "react"
import { CheckLogin } from "../shared/components/CheckLogin"
import { useLogin } from "../shared/hooks/useLogin"

interface Props {
    movie?: MovieType
    isLoading: boolean
    isError: boolean
    refetch: () => void
}

export const Movie = ({ movie, isLoading, isError, refetch }: Props): JSX.Element => {
    const [createRate] = useCreateRateMovieMutation()
    const { user } = useLogin()
    const [slider, setSlider] = useState(5)

    const handleSubmitRate = () => {
        if (movie && user.request_token) {
            createRate({ value: slider, movie: movie.id, session_id: user.request_token as string })
                .unwrap()
                .then(() => {
                    showAlert('success', 'Ratio created')
                })
                .catch(() => {
                    showAlert('error', 'Ups, unexpected error')
                    setSlider(5)
                })
        }
    }

    return (
        <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
            {movie &&
                <>
                    <div className='movie'>
                        <img src={getUrlImg(movie?.poster_path)} />
                        <div className="movie-description">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <CheckLogin>
                                <div className="slidecontainer">
                                    <input
                                        type="range"
                                        min="0.5"
                                        max="10"
                                        step={0.5}
                                        value={slider}
                                        className="slider"
                                        onChange={(e) => setSlider(parseFloat(e.target.value))}
                                        onRateChange={() => console.log(slider)}
                                        id="myRange" />
                                    <div className="input-range-value">
                                        {slider}
                                    </div>
                                </div>
                                <button className="button-range" onClick={handleSubmitRate}>
                                    Save
                                </button>
                            </CheckLogin>
                        </div>
                    </div>
                </>
            }
        </CheckRequest>
    )
}

export const MoviePage = (): JSX.Element => {
    const { id } = useParams()
    const {data: movie, isLoading, isError, refetch} = useGetMovieQuery(id || '')
    return (
        <Movie movie={movie} isLoading={isLoading} isError={isError} refetch={refetch}/>
    )

}