import React from 'react'
import style from '../ItemListcontainer/ItemListcontainer.css'

export const ItemListContainer = (props) => {
  return (
    <h1 className='styleList'> {props.greetings}</h1>
  )
}

