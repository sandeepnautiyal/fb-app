import React from 'react'
import "./textfield.css"
const TextField = ({type,placeholder}) => {
  return (
    <>
    <input className='main' type={type} placeholder={placeholder}/>
    </>
  )
}

export default TextField