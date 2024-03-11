import ForProduct from './components/common/blockForProduction/ForProduct';
import Header from './components/common/header/Header';
import HeaderContact from './components/common/headerContact/HeaderContact';
import AboutTheCompany from './components/main/aboutTheCompany/AboutTheCompany';
import ControlProduction from './components/main/controlProduction/ControlProduction';
import ButtonControl from './components/main/controlProduction/buttonControl/ButtonControl';
import ImageChange from './components/main/imageChange/ImageChange';
import './null.css';

function App() {
  return (
    <>
    <HeaderContact/>
    <Header/>
    <ImageChange/>
    <ForProduct/>
    <AboutTheCompany/>
    <ControlProduction/>
    </>
  );
}

export default App;
