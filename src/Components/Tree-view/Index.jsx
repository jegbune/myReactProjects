import React from 'react'
import Menulist from './Menu-list'

function TreeView({ menus = [] }) {
  return (
    <div className='tree-view-container'>

      <Menulist list={menus} />
    </div>
  )
}

export default TreeView
