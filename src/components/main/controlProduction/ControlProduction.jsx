import ButtonControl from './buttonControl/ButtonControl'
import './controlProduction.css'

export default function ControlProduction() {

  return(
    <div className='controlProduction'>
      <h2 className='controlProduction-title'>Компоненты и контроль качества продукции</h2>
      <ul className='controlProduction-list'>
        <ButtonControl>Профиль ПВХ</ButtonControl>
        <ButtonControl>Метизы</ButtonControl>
        <ButtonControl>Сигнальные колпаки</ButtonControl>
        <ButtonControl>КВО</ButtonControl>
        <ButtonControl>Электронные компоненты</ButtonControl>
        <ButtonControl>Платы КИП</ButtonControl>
        <ButtonControl>Дверцы КИП</ButtonControl>
        <ButtonControl>Антивандальная трубка</ButtonControl>
        <ButtonControl>Информационные надписи</ButtonControl>
      </ul>
    </div>
  )
}