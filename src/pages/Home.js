import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../Search';



function Home() {
 

  return (
    <div className='home'>
  
     

      <div className='home_header'>
        <div className='header_left'>
          <Link to={'/about'}>About</Link>
          <Link to={'/store'}>Store</Link>

        </div>
        <div className='header_right'>
        <Link to={'/gmail'}>Gmail</Link>
        <Link to={'/images'}>Images</Link>

        
          <AppsIcon />
          <Avatar />
          
         
          
        </div>

      </div>

      <div className='home_body'>
        <div className='homebody_image'>
        <img  src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png' alt='google' />

        </div>
        
        
      <div className='home_inputContainer'>

        <Search  />

      </div>
      

      </div>


    </div>
  )
}

export default Home