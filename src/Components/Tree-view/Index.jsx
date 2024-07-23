import React from 'react'
import Menulist from './Menu-list'
import Back from '../Back'

function TreeView({ menus = [] }) {
  return (
    <div className='tree-view-container'>

      <Menulist list={menus} />
    <Back />

    </div>
  )
}

export default TreeView
