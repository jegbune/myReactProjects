import React, { useEffect, useState } from 'react'
import './scroll.css'

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchdata = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();


      if (data && data.products && data.products.length > 0) {
        setData(data.products)
        setLoading(false)
      }
    }

    catch (error) {
      setLoading(false)
      console.log(error.message)
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    fetchdata(url)
  }, [url])


  const handleScrollPercentage = () => {
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop || document
    const height = 
    document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled / height) * 100)
    // console.log(scrollPercentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage)

    return () => {
      window.removeEventListener('scroll', {})
    }

  })

  if (errorMessage) {
    return <h2> Error! {errorMessage}</h2>
  }

  if (loading) {
    return <h2>loading Data, Please wait...</h2>
  }

  console.log(data, scrollPercentage)


  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>

        </div>
      </div>
      <div className='data-container'>
        {data && data.length > 0 ?
          data.map((dataItem) =>
            <p key={dataItem.id}>{dataItem.title}</p>
          ) : null}
      </div>
    </div>
  )
}

export default ScrollIndicator
