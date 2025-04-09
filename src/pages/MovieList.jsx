import { useEffect } from "react"
import {useNavigate } from "react-router-dom"
import { Card } from "../components/Card"
import useFetch from "../hooks/useFetch"


export const MovieList = ({title,apiPath}) => {

 const {data:movies} =useFetch(apiPath)
 
  useEffect(() => {
    document.title =title}
)

const navigator=useNavigate()

return (
  <div>
    <div className=""></div>
    <main className="container mt-5 bg-dark">
      {title=="Your Guide to Great Movies"?(<div className="bg-body-dark py-2 border border-dark mb-2">
        <h3 className="turquoise">Welcome to Fiction</h3>
        <p className="text-light">Dive into a world of cinema with honest, insightful, and spoiler-free reviews on the latest blockbusters, hidden indie gems, timeless classics, and everything in between. Whether you're looking for your next movie night pick or just want to see what the buzz is about, we've got you covered.

            💡 Explore:

            In-depth reviews and ratings

            Trending films and critic picks

            Genre-wise recommendations

            Community opinions and top charts

            Join a community of movie lovers and discover cinema from a fresh perspective. Lights, camera… read on!</p>

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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) =>{
          return <Card key={movie.id} movie={movie}/>
          })}
        </div>
    </main>
  </div>
)
}