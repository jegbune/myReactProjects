import React, { useEffect, useReducer, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ImageSlider.css'

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false)

  const initialState = 0
  
  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case 'increment': return  (state + action.value) % images.length;
      case 'decrement': return (state - action.value + images.length) % images.length;
      case 'reset': return initialState;
      default: return state;
    }

  }, initialState)

  // useEffect(() => {
  //   if (count === 0) {
  //     dispatch({ type: 'reset' })
  //   }
  // }, [count])



useEffect(()=> {
  const fetchImages = async () => {
    setLoading(true)
    try {

      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data)
        setLoading(false)
      }

    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }
  }
  if (url !== '') fetchImages()
},[url,page,limit])



  useEffect(() => {
  }, [url,page,limit])

  if (loading) {
    return <div>Loading data! Please wait</div>
  }

  if (errorMsg) {
    return <div>Error occured</div>
  }

  if(images.length === 0) {
    return <div>No images available</div>
  }



  return (
    <div>
      <div key={images[state].id} className='image-container'>
        <img src={images[state].download_url} alt={images[state].author} />
        <button className='left' onClick={() => { dispatch({ type: 'decrement', value:'1' }) }}><FaArrowLeft /></button>
        <button className='right' onClick={() => { dispatch({ type: 'increment', value: '1' }) }}><FaArrowRight /></button>
        
        
        <div className='arr'>
          {
            [...Array(images.length)].map((_, index) => {
              return (
                  <button className='btn'onClick={()=> dispatch({type: 'increment', value: `${index}`})} ></button>
              )
            })    
          }
        
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
