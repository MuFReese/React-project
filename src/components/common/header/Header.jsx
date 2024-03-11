import './header.css'
import ButtonHeader from './ButtonHeader/ButtonHeader';

export default function Header() {
  return(
    <>
    <header className='headerMenu'>
      <div>
        <ButtonHeader><div className="headerMenu-logo"></div></ButtonHeader>
      </div>
      <div className='headerMenu-name'>
        <ButtonHeader>Продукция</ButtonHeader>
        <ButtonHeader>Маркировка</ButtonHeader>
        <ButtonHeader>Производство</ButtonHeader>
        <ButtonHeader>Контакты</ButtonHeader>
      </div>
    </header>
    </>
  )
}