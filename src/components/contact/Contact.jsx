import './contact.css'

export default function Contact() {

  return(
    <>
    <h2 className='contact-title'>Главный офис</h2>
    <div className='contact'>
      <div className='contact-data'>
        <h3 className='contact-data-adress'>99999, Москва, Красная площадь, 113/1</h3>
        <h4>Телефоны:</h4>
        <ul className='contact-data-telefon'>
          <li>+7 (999) 777-77-77</li>
          <li>+7 (997) 777-77-77</li>
        </ul>
        <h4>Email:</h4>
        <p className='contact-data-email'>mufreese@gmail.com</p>
      </div>
      <div className='contact-wrapForm'>
        <h3 className='contact-form-title'>Связаться с нами</h3>
        <form className='contact-form'>
          <input type="text" className='contact-form-input' placeholder='Введите имя'/>
          <input type="text" className='contact-form-input' placeholder='Введите фамилию'/>
          <input type='text' className='contact-form-input' placeholder='Введите номер телефона'/>
          <button className='contact-form-button'>Отправить</button>
        </form>
      </div>
    </div>
    </>
  )
}