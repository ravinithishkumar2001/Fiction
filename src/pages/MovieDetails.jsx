import { useState } from "react"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import backup from "../assets/backup.jpg"
import {convertMinutes} from "../utils/utils"


export const MovieDetails = () => {
  const params = useParams()
  const [movie,setMovie]= useState([])
  const key = import.meta.env.VITE_API_KEY;
  const image=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:backup
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  useEffect(() => {
    async function fetchMovie() {
        fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {setMovie(jsonData);console.log(jsonData)})
 
    }
    fetchMovie();
  });
  useEffect(() => {
    document.title = movie.title
  },[])
  

  return (
    <main className="container">
      <h5 className="text-secondary py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="image-fluid image-thumbnail" alt="" />
        </div>
        <div className="col-md-8">
          <h3 className="mt-3 turquoise">{movie.title}</h3>
          <p className="mt-3 text-light">{movie.overview}</p>
          {movie.genres? <p className="d-flex gap-3">
            {movie.genres.map((genre)=> (
              <span key={genre.id} className="badge bg-primary text-light">
              {genre.name}
              </span>
             ))}
            </p>: ""} 
          
          <p className="mt-2">
            <ul className="d-flex gap-3">
            <i className="bi bi-star-fill text-warning">
              {movie.vote_average}
            </i>
            <i className="bi bi-people-fill text-success">
              {movie.vote_count}
              
            </i>
            <i className="text-light">reviews</i>
            </ul>
          </p>
          <table className="table table-dark">
            <tbody >
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>

              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>

            </tbody>

          </table>
          <a className="btn btn-warning" href={`https://imdb.com/title/${movie.imdb_id}/`}>
          View in IMDB
          </a>
          <button className="btn btn-outline-danger mx-2 p-2 " onClick={() => {
            const stored = JSON.parse(localStorage.getItem("watchedMovies")) || [];
            const exists = stored.find((m) => m.id === movie.id);
            if (!exists) {
              localStorage.setItem("watchedMovies", JSON.stringify([...stored, movie]));
              
            } else {
              alert("Already in Watched List!");
            }
          }}
        >
          Mark as Watched
        </button>

        </div>
      </div>
    </main>
  )
}