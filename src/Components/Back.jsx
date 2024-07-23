import React from 'react'
import { FaArrowLeft, FaBackspace, FaBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Back() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Link to='/myReactProjects' style={{color: 'var(--color)',borderRadius: '1rem', border: '1px solid', padding: '0.8rem', margin:'1rem 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}><FaArrowLeft /> Go Back</Link>
    </div>
  )
}

export default Back
