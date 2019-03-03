import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import ContentBox from "./ContentBox"
import Saved from './Saved'
import Footer from './Footer'

const style = {
  height: '100%',
  width: '80%'
}

const Container = (props) => {

  return (
    <div style={style} className="container">
      <Header />
      <SearchBar
      handleFormSubmit={props.handleFormSubmit}
      handleInputChange={props.handleInputChange}
      book={props.book}
      />
    {props.matchID === '/' &&
      <ContentBox
      handleViewBtn={props.handleViewBtn}
      handleSaveBtn={props.handleSaveBtn}
      data={props.data}
      />
    }
    {props.matchID === '/saved' &&
      <Saved
        getDbData={props.getDbData}
      />
    }
      <Footer />
    </div>
  )
}

export default Container
