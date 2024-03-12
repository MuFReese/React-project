import { useState } from 'react'
import ButtonShow from './buttonShow/ButtonShow'
import './showProduct.css'
import TakeDataShow from './takeDataShow/TakeDataShow'

export default function ShowProduct() {
  const [showProduct, getShowProduct] = useState(0)
  const [showProductActive, getShowProductActive] = useState(false)

  function buttonOneOnclick() {
    getShowProduct(0)
    getShowProductActive(!showProductActive)
  }
  function buttonTwoOnclick() {
    getShowProduct(1)
    getShowProductActive(!showProductActive)
  }
  function buttonThreeOnclick() {
    getShowProduct(2)
    getShowProductActive(!showProductActive)
  }
  function buttonFourOnclick() {
    getShowProduct(3)
    getShowProductActive(!showProductActive)
  }
  function buttonFiveOnclick() {
    getShowProduct(4)
    getShowProductActive(!showProductActive)
  }

  return(
    <div className='showProduct'>
      <h2 className='showProduct-title'>Дополнительное оборудование нашего производства</h2>
      <section className='showProduct-sectionButtonAndInfornation'>
        <aside className='showProduct-section-button'>
          <ButtonShow showOnclick={buttonOneOnclick} activeShow={showProduct === 0 ? true : false}>Блок контроля анодных заземлителей</ButtonShow>
          <ButtonShow showOnclick={buttonTwoOnclick} activeShow={showProduct === 1 ? true : false}>Блок защитного заземления</ButtonShow>
          <ButtonShow showOnclick={buttonThreeOnclick} activeShow={showProduct === 2 ? true : false}>Анодные заземлители</ButtonShow>
          <ButtonShow showOnclick={buttonFourOnclick} activeShow={showProduct === 3 ? true : false}>Станция катодной защиты</ButtonShow>
          <ButtonShow showOnclick={buttonFiveOnclick} activeShow={showProduct === 4 ? true : false}>Крыша высотного обзора (КВО)</ButtonShow>
        </aside>
        <aside>
          <TakeDataShow type={showProduct} activeTake={showProductActive}/>
        </aside>
      </section>
    </div>
  )
}