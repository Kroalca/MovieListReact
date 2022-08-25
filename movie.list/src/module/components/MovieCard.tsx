import { useNavigate } from "react-router-dom"
import { PopularMovies } from "../../libraries/movies/types"
import { getUrlImg } from "../shared/utils"
import './MovieCard.scss'

interface Props {
    movie: PopularMovies
}

export const MovieCard = ({ movie }: Props): JSX.Element => {
    const navidate = useNavigate()

    const handleNavigateMovie = () => {
        navidate(`/movie/${movie.id}`)
    }

    return (
        <div className="movie-card" onClick={handleNavigateMovie}>
            <img src={getUrlImg(movie.poster_path)} alt={movie.title} />
            <div className="movie-info">
                <span className="title">{movie.title}</span>
                <span className="subtitle">{movie.release_date}</span>
            </div>
        </div>
    )
}