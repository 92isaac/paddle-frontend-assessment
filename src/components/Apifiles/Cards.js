import React from 'react'
import "./card.css"

const Cards = ({details}) => {
  return (
<div className='container'>
    <div className='row'>
    <div className="col card-container">
         <div className="card-img">
        <img src={details.owner.avatar_url} />
      </div>
      <div className="name">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
        <div className="issues">
          <h4>Stars: {details.stargazers_count}</h4>
          <h4>Issue {details.open_issues_count}</h4>
          <h4>Created: {details.created_at}</h4>
        </div>
      </div>
    </div>
    </div>
</div>
  )
}

export default Cards