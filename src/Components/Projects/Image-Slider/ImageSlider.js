import React, { useEffect, useReducer, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ImageSlider.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [preloadedImages, setPreloadedImages] = useState([])
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false)
  const intervalRef = useRef(null)
  const initialState = 0

  const reducer = (state, action) => {

    switch (action.type) {
      case 'increment':
        return (state + action.value) % preloadedImages.length;
      case 'decrement':
        return (state - action.value + preloadedImages.length) % preloadedImages.length;
      case 'set':
        return action.value;
      case 'reset':
        return initialState;
      default:
        return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
        dispatch({type: 'increment', value: 1})
      }, 5000);
    
    return ()=> clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if (data) {
          setImages(data)
          preloadImages(data)
          setLoading(false)
        }

      } catch (e) {
        setErrorMsg(e.message)
        setLoading(false)
      }
    };

    if (url !== '') fetchImages()
  }, [url, page, limit])

const preloadImages = (ImageData) => {
  const preloaded = ImageData.map((img)=> {
    const image =new Image();
    image.src = img.download_url;
    return image;
  });
  setPreloadedImages(preloaded)
}

  if (loading) {
    return <div>Loading data! Please wait</div>
  }

  if (errorMsg) {
    return <div>Error occured: {errorMsg}</div>
  }

  if (images.length === 0) {
    return <div>No images available</div>
  }



  return (
    <div className='image-slider-container'>
      <div className='image-container' style={{transform:`translateX(-${state*100}%)`}}>
        {images.map((image,index) => (
          <img key={index} src={image.download_url} alt={image.author} />
        ))}</div>
        <BsArrowLeftCircleFill className='left' onClick={() => dispatch({type: 'decrement', value: 1 })} />
        <BsArrowRightCircleFill className='right' onClick={() => dispatch({type: 'increment', value: 1})} />


        <div className='arr'>
          {
            images.map((_, index) => {
              return (
                <button key={index} className={`btn ${index === state ? 'active' : ''}`} onClick={() => dispatch({ type: 'set', value: index })} ></button>
              )
            })
          }

        </div>
      </div>
  )
}

export default ImageSlider
