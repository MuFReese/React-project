import './takeData.css'

export default function TakeData({title, description}) {
  return (
    <li className="componentCompany">
      <h2 className="componentCompany-title">{title}</h2>
      <p className="componentCompany-description">{description}</p> 
    </li>
  )
}