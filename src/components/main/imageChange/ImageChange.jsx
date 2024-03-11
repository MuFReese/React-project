import { useEffect, useState } from 'react'
import { dataChangeImage } from '../../../data.js' 
import './imageChange.css'



export default function ImageChange() {
  const [interval, getIntetval] = useState(0)
  const [clear, getClear] = useState(true)
  const [classEffect, getclassEffect] = useState(false)

  useEffect(() => {
    const time = setInterval(() => {
      if(clear) {
        if (interval < dataChangeImage.length - 1) {
          getIntetval(interval => interval + 1)
          getclassEffect(!classEffect)
        } else {
          getIntetval(0)
          getclassEffect(!classEffect)
        }
      }
    }, 3500)

    return () => clearInterval(time);
  })

  // function whatClick(side) {
  //   if (side === 'right') {
  //     return buttonClickedRigth
  //   } else {
  //     return buttonClickedLeft
  //   }
  // }

  function buttonClickedRigth() {
    if (clear) {
      getClear(!clear)
    }
    if (interval < dataChangeImage.length - 1) {
      getIntetval(interval => interval + 1)
    } else {
      getIntetval(0)
    }
    getclassEffect(!classEffect)
  }
  function buttonClickedLeft() {
    if (clear) {
      getClear(!clear)
    }
    if (interval > 0) {
      getIntetval(interval => interval - 1)
    } else {
      getIntetval(2)
    }
    getclassEffect(!classEffect)
  }

  return(
    <>
    <div className="getData">
      <div className='getData-image'><img className='getData-image-size' src={dataChangeImage[interval].image} alt="" /></div>
      <div className={classEffect ? 'blockTrapezoid-effect' : 'blockTrapezoid'}></div>
      <div className='getData-text'>
        <h3 className={classEffect ? 'getData-text-label-effect' : 'getData-text-label'}>{dataChangeImage[interval].label}</h3>
        <div className={classEffect ? 'getData-text-textForLabel-effect' : 'getData-text-textForLabel'}>{dataChangeImage[interval].textForLabel}</div>
      </div>
      <button className='buttonRight' onClick={buttonClickedRigth}><div className='buttonRight-iconRigth'></div></button>
      <button className='buttonLeft' onClick={buttonClickedLeft}><div className='buttonRigth-iconLeft'></div></button>
    </div>
    </>
  )
}