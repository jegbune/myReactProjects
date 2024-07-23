import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'
import Back from '../Back'

function StarRating({noOfStars = 5}) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const stars = [...Array(noOfStars)]


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
    <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      {
        stars.map((_,index) => {
          return  (
          <FaStar 
              key={index}
              className={index <= (hover||rating) ? 'activeh' : 'inactiveh'}
              onClick= {() => handleClick(index)} 
              onMouseMove={()=> handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
              />
            );

        
      })}
    </div>
      <Back />
    </div>
  )
}

export default StarRating
