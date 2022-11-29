import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSerach from './useGoogleSerach'

import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';


function SearchPage() {

    const [{term}]=useStateValue()
    //LIVE API CALL


     const {data}=useGoogleSerach(term) 

    //CALL API CALL

    //const data=Response
    //console.log(data)


  return (
    <div className='searchPage'>
        <div className='searchPage_header'>
           <Link to='/'>
            <img className='searchPage_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' alt='' />
           </Link>

           <div className='searchPage_headerBody'>
            <Search hideButtons />
            <div className='searhPage_options'>
              <div className='searchPage_optionsleft'>
                <div className='searhPage_option'>
                  <SearchIcon />
                  <Link to='/all'>All</Link>

                </div>
                <div className='searhPage_option'>
                  <DescriptionIcon />
                  <Link to='/news'>News</Link>

                </div>
                <div className='searhPage_option'>
                  <ImageIcon />
                  <Link to='/images'>Images</Link>

                </div>
                <div className='searhPage_option'>
                  <LocalOfferIcon />
                  <Link to='/shopping'>shopping</Link>

                </div>
                <div className='searhPage_option'>
                  <RoomIcon />
                  <Link to='/maps'>maps</Link>

                </div>
                <div className='searhPage_option'>
                  <MoreVertIcon />
                  <Link to='/more'>more</Link>

                </div>

              </div>
              <div className='searchPage_optionsRight'>
                <div className='searhPage_option'>

                  <Link to={'settings'}>Settings</Link>

                </div>

                <div className='searhPage_option'>
                  <Link to={'tools'}>Tools</Link>
                  
                </div>

              </div>


            </div>

           </div>


        </div>
        {term && (

<div className='searchPage_results'>
  <p className='searchPage_resultCount'>

    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
    
  </p>
  {data?.items.map((item)=>{

    return (

      <div key={item.Link} className='searchPage_result'>

        <a key={item.Link}  href={item.link}>
          {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
            <img
            className='searchPage_resultImage'
            src={ item.pagemap?.cse_image[0]?.src}
            alt={''}
             />
          )}



          
          {item.displayLink}</a>
        <a key={item.Link}  className='searchPage_resultTitle' href={item.link}>
          <h2>{item.title}</h2>


        </a>
        <p key={item.Link} className='searchPage_resultSnippet'>
          {item.snippet}

        </p>
        
    </div>

    

    
    )


  }
    
  )}



</div>

        )
        
        }
        
        </div>
  )
}

export default SearchPage