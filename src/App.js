import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SearchPage from './SearchPage'


function App() {
  return (
    
    <div className='app'>
        
         
       

        <BrowserRouter>
     
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
     
      
        </BrowserRouter>
 
      

       

      
      </div>
     

  )
}

export default App
