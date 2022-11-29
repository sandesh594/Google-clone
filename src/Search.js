import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';



function Search({hideButtons=false}) {

  
  const [state,dispatch]=useStateValue()

  const [input,Setinput]=useState('')
  const history=useNavigate()
 


  const search=e=>{
    e.preventDefault()

   
   
    history('/search')

    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })


  }
  return (
    <form className='search'>

      <div className='search_input'>
        <SearchIcon className='search_inputIcon' />
        <input  value={input} onChange={e=>Setinput(e.target.value)} />
        <MicIcon />
        
        

      </div>

      {!hideButtons ? (
        <div className='search_buttons'>
        <Button  type={'submit'}  onClick={search}  variant='outlined'>Google Search</Button>
        <Button variant="outlined">
   I'm feeling lucky
</Button>

        
      </div>


      ):(
        <div className='search_buttons'>
        <Button className='search_buttonHidden' type={'submit'}  onClick={search}  variant='outlined'>Google Search</Button>
        <Button className='search_buttonHidden' variant="outlined">
   I'm feeling lucky
</Button>

        
      </div>


      )}
      
      

      
      
      </form>
  )
}

export default Search