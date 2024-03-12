import './buttonShow.css'

export default function ButtonShow({children, showOnclick, activeShow}) {

  return(
    <button
    onClick={showOnclick}
    className={ activeShow ? 'buttonProductShow activeButton' : 'buttonProductShow'}
    >
      {children}
    </button>
  )
}