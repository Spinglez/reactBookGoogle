import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h3>Google Books</h3>
        <div className="col mt-2">
          <span>
            <Link to="/">Search </Link>
          </span>
          <span>| </span>
          <span>
            <Link to="/saved">Saved</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
