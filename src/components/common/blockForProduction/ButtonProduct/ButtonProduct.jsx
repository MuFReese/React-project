import { useState } from 'react'
import './buttonProduct.css'


export default function ButtonProduct({children, onClick}) {
  const [mous, getMous] = useState(false)

  function mouseOver() {
    getMous(true)
  }
  function mouseLeave() {
    getMous(false)
  }
    
  return(
    <button
    onClick={onClick}
    className='buttonProduct'
    id='mouse'
    onMouseOver={mouseOver}
    onMouseLeave={mouseLeave}
    >
      <h3 className='buttonProduct-children'>{children}</h3>
      <div className={ mous ? 'buttonProduct-effect buttonProduct-effect-hover' : 'buttonProduct-effect'}></div>
    </button>
  )
}