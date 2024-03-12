import './manufacture.css'

export default function Manufacture() {

  return(
    <div className='manufacture'>
      <h2 className='manufacture-title'>Сырье для производства КИП и ОПЗ</h2>
      <div className='manufacture-info'>
        <h3 className='manufacture-info-title'>Профиль ПВХ</h3>
        <ul className='manufacture-info-list'>
          <li>Изделия не должны иметь трещин, обломов и расслоений.</li>
          <li>Внешний вид (качество поверхностей) профиля и цвет должны соответствовать эталонным образцам, утвержденным в установленном порядке.</li>
          <li>На лицевых поверхностях изделий не допускаются посторонние включения, усадочные раковины, вздутия и наплывы, кромки изделия должны быть ровными, без заусениц и щербин. Допускаются единичные следы от механической обработки, формовочного и калибровочного инструмента длиной, шириной и глубиной не более 0, 5 мм, на лицевой стороне не должно быть царапин, видимых с расстояния 1 м от поверхности изделия.</li>
          <li>Торцы изделий должны быть ровно обрезаны под прямым углом (90±5)° к оси.</li>
          <li>Геометрические размеры должны соответствовать чертежам.</li>
          <li>Изделие должно быть стойким к влиянию климатических факторов от минус 60° С до плюс 60° С. При нагревании изделия до температуры 60°С и охлаждении до температуры минус 60°С оно должно сохранять форму и размеры.</li>
          <li className='manufacture-info-list-image'></li>
          <li>Изделия должны изготавливаться из смеси следующих материалов: поливинилхлорид эмульсионный любой марки, (ГОСТ 14039 или другим нормативным документом производителя); мел естественный обогащенный молотый любых марок и сортов для полимерной промышленности, согласно ГОСТ 12085 или другим нормативным документам производителя; специальные добавки, которые определяют или усиливают то или иное эксплуатационное свойство изделия.</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='manufacture-backImage'>
        <div className='manufacture-backImage-trapezoid'></div>
        <h2 className='manufacture-backImage-title'>Произведено в компании Name</h2>
      </div>
      <div className='manufacture-production'>
        <div className='manufacture-production-plats'>
          <h2 className='manufacture-production-plats-title'>Платы КИП</h2>
          <div className='manufacture-production-plats-image'></div>
          <p>Из стеклотекстолита по ГОСТ 12652 толщиной 5мм марки СТЭФ или подобного</p>
          <p>В случае бюджетного варианта возможно использование текстолита.</p>
        </div>
        <div className='manufacture-production-door'>
          <h2 className='manufacture-production-door-title'>Дверцы КИП</h2>
          <div className='manufacture-production-door-image'></div>
          <ul className='manufacture-production-door-material'>
            <h3>Материал:</h3>
            <li>Полистирол</li>
            <li>ABS</li>
          </ul>
          <ul className='manufacture-production-door-productionPrinciple'>
            <h3>Принцип производства:</h3>
            <li>Формование</li>
            <li>Литьё</li>
          </ul>
        </div>
      </div>
    </div>
  )
}