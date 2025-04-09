import { Route, Routes } from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages"

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList title="Your Guide to Great Movies" apiPath="movie/now_playing"/>}/>
        <Route path="/movies/popular" element={<MovieList title="Popular Movies" apiPath="movie/popular"/>}/>
        <Route path="/movies/top" element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated"/>}/>
        <Route path="/movies/upcoming" element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming"/>}/>
        <Route path="movie/:id" element={<MovieDetails title="MovieDetails" apiPath="movie/MovieDetails"/>}></Route>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound/>} title="Page Not Found"/>
    </Routes>
    </>
  )
}

export default AllRoutes