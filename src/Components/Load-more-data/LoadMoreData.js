import React, { useEffect, useState } from 'react'
import './Style.css'

function LoadMoreData({ limit = 20, skip = 20 }) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)


  const fetchProducts = async () => {
    try {

      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

      const result = await response.json()

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...result.products])
        setLoading(false)
      }
      console.log(result)

    } catch (e) {
      console.log(e.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(() => {
    if (products && products.length === 100)  setDisableButton(true) 
  }, [products])

  if (loading) { return <div>Please wait, Loading Data</div> }



  return (
    <div className='container p'>
      <div className='product-container'>
        {
          products && products.length ?
            products.map((product) => {
              return <div className='product' key={product.id}>
                <img
                  src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            }) : null
        }
      </div>
      <div className='button-container'>
        <button disabled={disableButton} onClick={() => setCount(prev => prev + 1)}>Load More product</button>

      </div>
    </div>
  )
}

export default LoadMoreData


