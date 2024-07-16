import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'

function StarRating({noOfStars = 5}) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const stars = [...Array(noOfStars)]

  const ClickArray = []

  const handleClick = (index) => {
    setRating(index)
  }
  
  const handleMouseEnter = (index) => {
    setHover(index)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      {
        stars.map((_,index) => {
          return  (
          <FaStar 
              key={index}
              className={index <= (hover||rating) ? 'active' : 'inactive'}
              onClick= {() => handleClick(index)} 
              onMouseMove={()=> handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
              />
            );

        
      })}
      
    </div>
  )
}

export default StarRating
