// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  let cards = props.reviews.map(review => {
    return(
      <div className="review">
        <h1>{review.display_title}</h1>
        <img src={review.multimedia.src}/>
        <br/>
        <a href={review.link.url}>Review</a>
      </div>
    )
  })

  return(
    <div className="review-list">
      {cards}
    </div>
  )
}

export default MovieReviews
