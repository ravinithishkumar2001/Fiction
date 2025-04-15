import { useEffect } from "react"
import {useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import useFetch from "../hooks/useFetch"


export const Search = ({ apiPath }) => {
  const [searchParams] =useSearchParams()
  const queryTerm = searchParams.get("q")
  const {data :movies} =useFetch(apiPath, queryTerm)

  useEffect(() => {
  document.title =`Search results for ${queryTerm}`
  },[queryTerm])
  
  return (
    <main className="container">
      <h5 className="turquoise">
        {movies.length==0?`No result found for ${queryTerm}`:`Result for ${queryTerm}`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 py-2">
        {movies.map((movie)=> {
          return <Card key={movie.id} movie={movie}/>
        })}
      </div>
    </main>
  )

}