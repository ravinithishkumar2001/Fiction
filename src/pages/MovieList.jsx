import { useEffect } from "react"
import {useNavigate } from "react-router-dom"
import { Card } from "../components/Card"
import useFetch from "../hooks/useFetch"


export const MovieList = ({title,apiPath}) => {

 const {data:movies} =useFetch(apiPath)
 
  useEffect(() => {
    document.title =title},[title]
)

const navigator=useNavigate()

return (
  <div>
    <div className=""></div>
    <main className="container mt-5 bg-dark">
      {title=="Your Guide to Great Movies"?(<div className="bg-body-dark py-2 border border-dark mb-2">
        <h3 className="turquoise">Welcome to Fiction</h3>
        <p className="text-light">Welcome to Fiction—your ultimate movie companion for discovering the best in cinema, from the latest blockbusters and trending hits to underrated indies and timeless classics. Whether you're searching for your next movie night pick or diving into genre-based recommendations, we’ve got you covered with honest, spoiler-free reviews, community insights, and curated lists. Explore, rate, and connect with fellow film lovers as you uncover stories that entertain, inspire, and stay with you.</p>

            <button className="btn btn-secondary" onClick={() => {
              navigator("/movies/upcoming")
            }}
            >
              Explore Now
              </button>
      </div>
    ):(
      ""
    )}
      <h5 className="turquoise py-2 ">{title}</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 py-2 " >
              {movies.map((movie) => (
              <div key={movie.id} className="col">
                <Card movie={movie} />
              </div>
            ))}
        </div>
    </main>
  </div>
)
}