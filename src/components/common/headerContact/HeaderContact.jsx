import './headerContact.css'

export default function HeaderContact() {

  return(
    <>
    <div className="headerContact">
      <h2 className="headerContact-email">Email: <span>mufreese@gmail.com</span></h2>
      <div className="headerContact-textAndTelefon">
        <div className="headerContact-text">
          <h3 style={{marginBottom: '20px'}}>Секретариат:</h3>
          <h3>Отдел продаж:</h3>
        </div>
        <div className="headerContact-telefon">
          <h3 style={{marginBottom: '20px'}}>+7(999)777-77-77</h3>
          <h3>+7(999)777-77-77</h3>
        </div>
      </div>
    </div>
    </>
  )
}