import React, { useState } from 'react'
import Menulist from './Menu-list'
import { FaMinus, FaPlus } from 'react-icons/fa'

function Menuitem({ item }) {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({ ...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel] })
  }

  console.log(displayCurrentChildren)

  return (
    <li>
      <div className='menu-item'>
        <p>{item.label}</p>
        {
          item && item.children && item.children.length > 0 ? <span onClick={() => handleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25} /> : <FaPlus color='#fff' size={25} />}</span> : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <Menulist list={item.children} /> : null}
    </li>
  )

}

export default Menuitem
