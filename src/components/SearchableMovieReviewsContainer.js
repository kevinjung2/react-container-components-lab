import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XLFR6E7u1i5RIJ4q8uGHAiRFSnkBMVk2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(this.getUrl())
    .then(resp => resp.json())
    .then(data => this.setState({
      reviews: data.results
    }))
  }

  getUrl = () => {
    return (URL + "&query=" + this.state.searchTerm)
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit" value="Search"/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
