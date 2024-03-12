import { useState } from 'react';
import BackImage from './components/common/backImage/BackImage';
import ForProduct from './components/common/blockForProduction/ForProduct';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import HeaderContact from './components/common/headerContact/HeaderContact';
import AboutTheCompany from './components/main/aboutTheCompany/AboutTheCompany';
import ControlProduction from './components/main/controlProduction/ControlProduction';
import ImageChange from './components/main/imageChange/ImageChange';
import ShowProduct from './components/main/showProduct/ShowProduct';
import './null.css';
import FirstProduction from './components/production/firstProduction/FirstProduction';
import Manufacture from './components/manufacture/Manufacture';
import Contact from './components/contact/Contact';
import ButtonElementProduct from './components/production/ButtonElementProduct/ButtonElementProduct';

function App() {
  const [tab, setTab] = useState('main')

  return (
    <>
    
    <HeaderContact/>
    <Header 
    active={tab} onChahge={(current) => setTab(current)}
    />
    {tab === 'main' && 
      <>
        <main>
          <ImageChange/>
          <ForProduct/>
          <AboutTheCompany/>
          <ControlProduction/>
          <BackImage/>
          <ShowProduct />
        </main>
      </>
    }
    {tab === 'products' && 
      <>
        <FirstProduction indexProduct={0}/>
        <ShowProduct />
      </>
    }
    {tab === 'marcking' && 
      <>
        <FirstProduction indexProduct={2}/>
        <ShowProduct />
      </>
    }
    {tab === 'production' && 
      <>
        <Manufacture/>
        <ShowProduct />
      </>
    }
    {tab === 'contact' && 
      <>
        <Contact/>
      </>
    }
    <Footer/>
    <ButtonElementProduct/>
    </>
  );
}

export default App;
