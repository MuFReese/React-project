import './aboutTheCompany.css'
import { dataForCompany } from '../../../data' 
import TakeData from '../../common/TakeData/TakeData'

export default function AboutTheCompany() {

  return(
    <ul className='company'>
      {dataForCompany.map(way => <TakeData key={way.title} {... way}/>)}
    </ul>
  )
}