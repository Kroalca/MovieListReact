import { PopularMovies } from "../../libraries/movies/types"
import { getUrlImg } from "../shared/utils"
import './MovieCard.scss'

interface Props {
    discover: PopularMovies
}

export const MovieCard = ({ discover }: Props): JSX.Element => {
    return (
        <div className="movie-card">
            <img src={getUrlImg(discover.poster_path)} alt={discover.title} />
            <div className="movie-info">
                <span className="title">{discover.title}</span>
                <span className="subtitle">{discover.release_date}</span>
            </div>
        </div>
    )
}