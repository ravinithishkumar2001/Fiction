import notfound from "../assets/notfound.jpg"
import {Link} from "react-router-dom"
export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notfound} alt="" className="img-fluid w-50 d-block mx-auto"/>
    
    <p className="text-center">
      <Link to="/" className="btn btn-primary">
      Go TO HOME PAGE
      </Link>
    </p>

    </div>
  )
}