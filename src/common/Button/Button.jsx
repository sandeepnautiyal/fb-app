import React from 'react'
import './button.css'
const Button = ({text,width,fontsize,bgcolor}) => {
  return (
    <>
      <button className='btn' style={{fontSize:`${fontsize}px`,backgroundColor:`${bgcolor}`,width:`${width}px`}}>{text}</button>
    </>
  )
}

export default Button