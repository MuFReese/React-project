import './header.css'
import ButtonHeader from './ButtonHeader/ButtonHeader';

export default function Header({active, onChahge, indexHoverHeader}) {

  return(
    <>
    <header className='headerMenu'>
      <div>
        <ButtonHeader isActive={active === 'main'} onClick={() => onChahge('main')}><div className="headerMenu-logo"></div></ButtonHeader>
      </div>
      <div className='headerMenu-name'>
        <ButtonHeader 
        isActive={active === 'products'} 
        onClick={() => onChahge('products')}
        >Продукция
        </ButtonHeader>
        <ButtonHeader isActive={active === 'marcking'} onClick={() => onChahge('marcking')}>Маркировка</ButtonHeader>
        <ButtonHeader isActive={active === 'production'} onClick={() => onChahge('production')}>Производство</ButtonHeader>
        <ButtonHeader isActive={active === 'contact'} onClick={() => onChahge('contact')}>Контакты</ButtonHeader>
      </div>
    </header>
    </>
  )
}