import React from 'react'

const style = {
  holder : {
    width: '90%',
    margin: '0 auto'
  },
  searchBar: {
    width: '90%'
  }
}

const SearchBar = (props) => {
  return (
    <div style={style.holder} className="mt-2 mb-2">
    <h5>Book Search</h5>
      <form className="form-inline">
        <input
          name='book'
          style={style.searchBar}
          value={props.book}
          onChange={props.handleInputChange}
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.handleFormSubmit}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
