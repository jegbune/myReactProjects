import React, { useEffect, useState } from 'react'
import { datas } from './data'
import './Index.css'

function Index() {
  const [selectedItem, setSelectedItem] = useState([])
  const [multiSelection, setMultiSelection] = useState(false)
  const [select, setselect] = useState(null)


  const handleMultiSelection = () => {
    setMultiSelection(prev => !prev)
  }
  const handleClick = (index) => {
    multiSelection ?
      setSelectedItem(prev =>
        //remove array from list
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      ) :
      setselect(prev => prev === index ? null : index)
  }

  useEffect(() => {
    console.log(selectedItem)
  }, [selectedItem])


  return (
    <div className='container'>
      <div className='wrapped'>
        <button className='m-box' onClick={handleMultiSelection}>Enable Multiple Selection</button>
        <div>
          {datas.map((data, index) => {
            return (
              <div key={index} className='listItem' onClick={() => handleClick(index)} >
                <div className='list-contain'>
                  {data.question}
                  <p>+</p>
                </div>
                {multiSelection && selectedItem.includes(index) && <div className='answer'>{data.answer}</div>}
                {!multiSelection && select === index ? <div className='answer'>{data.answer}</div> : null}


              </div>

            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Index






