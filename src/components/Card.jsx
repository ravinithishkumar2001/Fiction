import {Link} from "react-router-dom"
import backup from "../assets/backup.jpg"
export const Card = ({movie}) => {
    const{poster_path,id,overview,title,vote_average,vote_count}=movie

    const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:backup
  return (
    <div className="col">
      <div className="card shadow-sm bg-dark text-overflow-1" title={title}>
        <div className="card-body"></div>
        <img src={image} alt="" className="card-img-top"/>
        
        <div className="card-body">
          <h2 className="card-title text-primary ">{title}</h2>
          <p className="card-text text-secondary text-overflow-2">{overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>

            <small>
              <i className="bi bi-star-fill text-warning">
                {vote_average} | {vote_count} review
              </i>
            </small>
          </div>
        </div>
      </div>

    </div>
  )
}

