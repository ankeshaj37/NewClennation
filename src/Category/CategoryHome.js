import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryHome.css';


const CategoryHome = () => {

 

 const data = [
  {id:'home-cleaning-services',kk:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-real-estate-moving-and-storage-flaticons-lineal-color-flat-icons.png',title:'Home Cleaning',},

  {id:'car-cleaning-services',kk:'https://img.icons8.com/fluency/512/car-cleaning.png',title:'Car Cleaning' },
  {id:'chandelier-cleaning-services',kk:'https://img.icons8.com/external-nawicon-outline-color-nawicon/512/external-chandelier-living-room-nawicon-outline-color-nawicon.png' ,title:'Chandelier Clean'}, 

  {id:'best-shifting-services',kk:'https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Moving-Home-real-estate-vectorslab-flat-vectorslab.png' ,title:'Shifting' },
  {id:'job-contract-services',kk:'https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-job-recruitment-agency-flaticons-flat-flat-icons.png',title:'Job Agency' },
  {id:'real-estate-agent-services',kk:'https://img.icons8.com/fluency/512/real-estate.png',title:'Real Estate' },
 

  {id:'decoration-events-services',kk:'https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-decoration-usa-flatart-icons-flat-flatarticons-2.png',title:'Decoration' },
  
  
 


  {id:'digital-support-services',kk:'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/512/external-digital-marketing-digital-marketing-flatart-icons-lineal-color-flatarticons.png' 
  ,title:'Digital Support' },
  {id:'all-types-services',kk:'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-more-interface-kiranshastry-gradient-kiranshastry.png',title:'Others' }
]

  return (
  <>
  <h1 class="h1title">All Servises</h1>
  <div className=" kk ">
    
  {data.map((e) => (
   <>
   
    <div>
       
    <Link to={'/'+ e.id} className='lim'> <div className=' boxs '><img className='LKL' src={e.kk} alt="images"/></div></Link><p className='cattext'>{e.title}</p>
    </div>

    
   </>
       ))}
  </div>
  </>
    

        
  

    
  )
}

export default CategoryHome
