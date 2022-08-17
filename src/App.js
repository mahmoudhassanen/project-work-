
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import axios from 'axios'
// import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Clothes from './Pages/Clothes/Clothes';
import Tech from './Pages/Tech/Tech';
import {DataContextProvider} from './Data'
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

function App() {







  return (
    <div className='App'>
      
 <DataContextProvider>
    <Navbar/>
    <Routes> 
      <Route path='Clothes' element={ <Clothes/> } /> 
      <Route path='Tech' element={ <Tech/> } /> 
      <Route path='details' element={ <Details/> } > 
      <Route path=':id' element={ <Details/> } /> 
      </Route> 
      <Route  path='cart' element={ <Cart/> } />



    </Routes>
    </DataContextProvider>
    </div>
    
  );
}

export default App;
