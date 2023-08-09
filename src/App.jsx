
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Componets/Header';
//import Encabezado from './Componets/Encabezado'
import Card from './Componets/Card'
import Current from './Componets/Current';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'


//export const LocationContext = createContext();
function App() {
 
 
  

  return (
      
   /*  
     Este codígo es para cuando quiero pasar valores entre dos elementos hijos en el componente app
    <LocationContext.Provider value={location}>
      <Encabezado setLocation={setLocation} />
      <Card />
    </LocationContext.Provider> */
     
    <Router>
    
    <Header/>

    <Routes>
      <Route path="/" element={<Current/>}></Route>
      <Route path="/card/:location" element={<Card/>}></Route>
    </Routes>
   
      
  </Router>
  

  )
}

export default App
