  import {Link} from "react-router-dom"
  import backup from "../assets/backup.jpg"

  
  export const Card = ({movie}) => {
      const{poster_path,id,overview,title,vote_average,vote_count}=movie

      const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:backup
    return (
      
      <div className="col  mb-4" style={{ boxShadow: "1px 1px 1px 1px rgba(0,0,0,10)"}}>
        <div className="card h-100 shadow-sm bg-dark d-flex flex-column text-overflow-1" title={title}>
          <Link to={`/movie/${id}`}><img src={image} alt="" className="card-img-top position-relative" /></Link>
              <small className="position-absolute  end-0  bg-warning px-2 py-1" style={{ boxShadow: " 2px rgba(0,0,0,0.5)",borderRadius: "0px 8px 0px 8px" }}>
                <i className="bi bi-star-fill tiny-text  text-dark ">
                <span> {movie.vote_average} / {movie.vote_count}</span>
                <span> review</span>
                </i>
              </small>
  
          
          <div className="card-body">
            <h2 className="card-title text-sm  text-overflow-2 "><Link to={`/movie/${id}`} className=" text-title no-underline">{title}</Link></h2>
            <p className="card-text text-secondary text-overflow-2">{overview}</p>
            <div className="mt-auto d-flex justify-content-between align-items-center h-auto">
             </div>
              <Link to={`/movie/${id}`} className="btn btn-sm btn-t mt-1 me-4">Read More</Link>

              <button className="btn btn-sm btn-s btn-outline-danger mt-1" onClick={() => {
                const stored = JSON.parse(localStorage.getItem("watchedMovies")) || [];
                const exists = stored.find((m) => m.id === movie.id);

                let updatedList;

                if (exists) {
                  updatedList = stored.filter((m) => m.id !== movie.id);
                } else {
                  updatedList = [...stored, movie];
                }

                localStorage.setItem("watchedMovies", JSON.stringify(updatedList));
                window.dispatchEvent(new Event("storage"));
              }}>
                {JSON.parse(localStorage.getItem("watchedMovies") || "[]").some((m) => m.id === movie.id)
                  ? "Remove from Watched"
                  : "Mark as Watched"}
              </button>

            </div>
          </div>
        </div>

           
    )
  }

