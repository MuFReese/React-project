import ButtonProduct from './ButtonProduct/ButtonProduct'
import './forProduct.css'

export default function ForProduct() {

  return(
    <>
    <section className='forProduct'>
      <article className='forProduct-imem-1'><ButtonProduct>Измерительные пункты</ButtonProduct></article>
      <article className='forProduct-imem-2'><ButtonProduct>Опознавательные знаки</ButtonProduct></article>
      <article className='forProduct-imem-3'><ButtonProduct>Устройства сравнение</ButtonProduct></article>
      <article className='forProduct-imem-4'><ButtonProduct>Блок совместимости</ButtonProduct></article>
    </section>
    </>
  )
}