import './buttonHeader.css'


export default function ButtonHeader({onClick, children, isActive, mouseOverHeader, mouseLeaveHeader}) {

  return (
    <button
    className={ isActive ? 'buttonHead active' : 'buttonHead'}
    onClick={onClick}
    onMouseOver={mouseOverHeader}
    onMouseLeave={mouseLeaveHeader}
    >{children}</button>
  )
}