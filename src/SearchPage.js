import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'

import { Link } from 'react-router-dom'
import Search from './Search'
import { Description, Image, More, Room, SearchRounded, ShoppingBag } from '@mui/icons-material'

function SearchPage() {

    //AIzaSyCgMfETVaQe1r08ORSX1jnlopZlee1AmMI
    //f6a7fd491f8dc44c9

    const [{term},dispatch]=useStateValue()

   const {data}=useGoogleSearch(term)
   
 

   

  return (
    <div className='searchPage'>
       
        <div className='searhPage_header'>
          <div className='searhPage_header1'>
          
            <Link to='/image'>
                <img className='searchPage_logo'
                src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
                alt=''
                ></img>

            </Link>

            <div className='search_PageHeaderBody'>

            <Search hideButtons/>

            </div>

            </div>

             

            <div className='serachPage_Options'>


              <div className='searchPage_optionsLeft'>

                <div className='serachPage_Option'>
                <SearchRounded />
                <Link to={'/all'}>All</Link>


                </div>

                <div className='serachPage_Option'>
                 <Description />
                 <Link to={'/news'}>News</Link>


                </div>

                <div className='serachPage_Option'>
                <Image />
                <Link to={'/image'}>Image</Link>


                </div> 

                <div className='serachPage_Option'>
                <ShoppingBag />
                <Link to={'/shopping'}>Shopping</Link>


                </div>


                <div className='serachPage_Option'>
                <Room />
                <Link to={'/maps'}>maps</Link>


                </div>

                <div className='serachPage_Option'>
                <More />
                <Link to={'/more'}>more</Link>


                </div>


               

              


              </div>

              
              <div className='searchPage_optionsRight'>

              <div className='serachPage_Option'>
               
                <Link to={'/settings'}>Settings</Link>


                </div>

                <div className='serachPage_Option'>
              
                <Link to={'/tool'}>Tool</Link>


                </div>



                



              </div>


            </div>


        </div>

        {term && 
        <div className='searhPage_results'>
          <p className='searchPage_resultcount'>

          About {data?.searchInformation?.formattedTotalResults+" "}
          results {data?.searchInformation?.formattedSearchTime} seconds for {term}

          </p>
          {
            data?.items.map(item=>{
              
              return (
              

              <div className='searchPage_result'>

                <a href={item.link}>
                  {item?.pagemap?.cse_image?.length >0 && 
                  item?.pagemap?.cse_image[0]?.src && (

                    <img className='searchPage_resultPage' src={item?.pagemap?.cse_image[0]?.src} alt='' />

                  )

                  }
                  

                

                {item?.displayLink}

                </a>

                <a className='searchPage_resultsTitle' href={item.link}>
                     
                     <h2>{item.title}</h2>

                </a>

                <p className='searchPage_resultssnippet'>
                  {item.snippet}
                </p>
                

              </div>

            )

               } )
          }
         





          


        </div>
}


        

        

    </div>
  )
}

export default SearchPage