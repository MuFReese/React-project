import './buttonControl.css'

export default function ButtonControl({controlClicked, children, isActive, ...props}) {

  return(
    <>
    <button
    className='buttonControlProduction'
    {...props}
    onClick={controlClicked}
    >{children}</button>
    </>
  )
}