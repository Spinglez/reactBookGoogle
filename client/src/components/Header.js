import React from 'react'

const Header = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-4">Google Books Search</h1>
        <p className="lead">
        *Now with 100% more React
        </p>
        <p>
          Use the Search Bar below to search Google Books and then mark them in your library!
        </p>
      </div>
    </div>
  )
}

export default Header
