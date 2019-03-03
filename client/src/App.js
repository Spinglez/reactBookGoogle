import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container'
import NavBar from './components/NavBar'
import API from './utils/API'
const axios = require('axios');
require('dotenv').config()

// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class App extends Component {
    state = {
      data: [],
      book: '',
      id: 0,
      message: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null,
      view: ''
    };

  //   putDataToDB = message => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }
  //
  //   axios.post("http://localhost:3001/api/putData", {
  //     id: idToBeAdded,
  //     message: message
  //   });
  // };
  componentDidMount() {
    this.setState({view:'/'})
  }

  matchID = (location) =>{
    return location
  }

  dataStore = book => {
    API.search(book).then(res => this.setState({ data: res.data.items }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
      let searchBook = this.state.book
      this.dataStore(searchBook)
      this.setState({
        book: ''
      })
  }

  handleViewBtn = link => {
    window.open(link, '_blank')
  }

  handleSaveBtn = data => {
    console.log(data);
    axios.post('http://localhost:3001/api/putData', {
      id: data.id,
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.smallThumbnail,
      linkData: data.volumeInfo.infoLink
    })
    .then(res => {
      console.log(res)
    })
    .catch(err =>{
      console.error(err);
    })
  }

  getDbData = () => {
    return axios.get('http://localhost:3001/api/Saved')
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar
            view={this.state.view}
            matchID={this.matchID}
            />
          <Route exact path="/" render={ () =>
              <Container
              matchID = {this.matchID('/')}
              book={this.state.book}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleViewBtn={this.handleViewBtn}
              handleSaveBtn={this.handleSaveBtn}
              data={this.state.data}
              getDbData={this.getDbData}
              />
          }/>
        <Route  exact path="/saved" render={() =>
            <Container
              matchID={this.matchID('/saved')}
              getDbData={this.getDbData}
            />
        }/>
        </div>
      </Router>
    );
  }
}



export default App;
