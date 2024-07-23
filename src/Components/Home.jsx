import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const projects = [
    {
    id: 1,
    title: 'Accordian',
    url: 'Accordian',
    },
    {
    id: 2,
    title: 'Image Slider',
    url: 'ImageSlider',
  },
    {
    id: 3,
    title: 'RandomColor',
    url: 'RandomColor',
  },
    {
    id: 4,
    title: 'StarRating',
    url: 'StarRating',
  },
    {
    id: 5,
    title: 'LoadMoreData',
    url: 'LoadMoreData',
  },
    {
    id: 5,
    title: 'Tree View',
    url: 'treeView',
  },
    {
    id: 6,
    title: 'QRCode',
    url: 'QRCode',
  },
    {
    id: 7,
    title: 'LightDarkMode',
    url: 'LightDarkMode',
  },
    {
    id: 8,
    title: 'ScrollIndicator',
    url: 'ScrollIndicator',
  },
  ]
  return (
    <div className='home-container'>
      <h1>My Projects</h1>
      <div className='list-container'>
        {
          projects.map((project)=> {
            return(
              <div key={project.id}  >
              <Link to={`/${project.url}`} className='project-li' >{project.title}</Link>
              </div>
            )
          })
        }
      </div>
      </div>
  )
}

export default Home
