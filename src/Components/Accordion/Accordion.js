import React, { useState } from 'react'
import './Accordion.css'
import { datas } from './data';

function Accordion() {
  const dataFile = datas
  const [selected, setSelected] = useState([])
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleMultiSelection = (index) => {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(index)
    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) cpyMultiple.push(index)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)
    setMultiple(cpyMultiple)
  }
  console.log(selected, multiple)


  const handleSingleSelection = (index) => {

    setSelected(index === selected ? null : index)
    // console.log(selected)

  }


  return (
    <div className="container">
      <div className='Box'>
        <button className='boxe' onClick={() => { setEnableMultiSelection(!enableMultiSelection) }}>Enable Multi Selection</button>

        {dataFile.map((data, index) => {
          return (
            <div key={index} className='box' onClick={enableMultiSelection ? () => handleMultiSelection(index) : () => handleSingleSelection(index)}>
              <div className='box1' >
                <div>{data.header}</div>
                <div>{selected === index ? '-' : '+'}</div>
              </div>

              {selected === index || multiple.indexOf(index) !== -1 ? <p>{data.content}</p> : null}

            </div>

          )
        })}

      </div>
    </div>
  );

}

export default Accordion
