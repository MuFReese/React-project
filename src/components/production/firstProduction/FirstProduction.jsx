import './firstProduction.css'
import { dataProductionList } from '../../../data'

export default function FirstProduction({indexProduct}) {

  return(
    <div className='productionList'>
      <div className='productionList-imageAndText'>
        <div className='productionList-imageAndText-image'><img src={dataProductionList[indexProduct].imageProduct} alt="" /></div>
        <h3 className='productionList-imageAndText-title'>{dataProductionList[indexProduct].imageProductTitle}</h3>
        <p className='productionList-imageAndText-text'>{dataProductionList[indexProduct].imageProductTitleText}</p>
      </div>
      <div className='productionList-feature'>
        <h2 className='productionList-feature-title'>{dataProductionList[indexProduct].title}</h2>
        <div className='productionList-feature-appointment'>
          <h3 className='productionList-feature-appointment-title'>{dataProductionList[indexProduct].appointment}</h3>
          <div className='productionList-feature-appointment-titleAndtext'>
            <h4 className='productionList-feature-appointment-titleAndtext-title'>{dataProductionList[indexProduct].appointmentTitle}</h4>
            <p className='productionList-feature-appointment-titleAndtext-text'>{dataProductionList[indexProduct].appointmentTitleText}</p>
          </div>
        </div>
        <div className='productionList-feature-appointment'>
          <h3 className='productionList-feature-appointment-title'>{dataProductionList[indexProduct].params}</h3>
          <div className='productionList-feature-appointment-titleAndtext'>
            <h4 className='productionList-feature-appointment-titleAndtext-title'>{dataProductionList[indexProduct].paramsTitle}</h4>
            <p className='productionList-feature-appointment-titleAndtext-text'>{dataProductionList[indexProduct].paramsTitleText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}