import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './Component/Header';
import Exchanges from './Component/Exchanges';
import Coins from './Component/Coins';
// import CoinDetails from './Component/CoinDetails';
function App() {
  return (
    <>
        < BrowserRouter>
        
          <div>
            <Routes>
               <Route  path='/' element={<Exchanges />}/>
               <Route  path='/coins' element={<Coins />}/>
               {/* <Route  path='/coins/:id' element={<CoinDetails/>}/> */}
            </Routes>
          </div>
         
        
        </BrowserRouter>
        
    </>
  )
}

export default App