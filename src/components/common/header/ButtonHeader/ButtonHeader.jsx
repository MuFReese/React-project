import './buttonHeader.css'


export default function ButtonHeader({onClick, children, isActive, ...props}) {

  return (
    <button
    className={ isActive ? 'buttonHead active' : 'buttonHead'}
    {...props}
    onClick={onClick}
    >{children}</button>
  )
}