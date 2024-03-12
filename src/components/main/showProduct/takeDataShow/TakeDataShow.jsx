import './takeDataShow.css'
import { dataForShowProduct } from '../../../../data' 


export default function TakeDataShow({type, activeTake}) {
  return(
    <div className={ activeTake ? 'takeDataShow-active' : 'takeDataShow'}>
      <h2 className="takeDataShow-title">{dataForShowProduct[type].titleShow}</h2>
      <div className='takeDataShow-textAndImage'>
        <div className='takeDataShow-textAndImage-image'><img src={dataForShowProduct[type].imageShow} alt="" /></div>
        <p className='takeDataShow-textAndImage-text'>{dataForShowProduct[type].descriptionShow}</p>
      </div>
    </div>
  )
}