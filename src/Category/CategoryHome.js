import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryHome.css';


const CategoryHome = () => {

 

 const data = [
  {id:1,kk:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-real-estate-moving-and-storage-flaticons-lineal-color-flat-icons.png',title:'House Cleaning',},
  {id:2,kk:'https://img.icons8.com/fluency/512/car-cleaning.png',title:'Car Cleaning' },
  {id:3,kk:'https://img.icons8.com/external-nawicon-outline-color-nawicon/512/external-chandelier-living-room-nawicon-outline-color-nawicon.png' ,title:'Chandelier Clean'}, 

  {id:4,kk:'https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Moving-Home-real-estate-vectorslab-flat-vectorslab.png' ,title:'Shifting' },
  {id:5,kk:'https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-job-recruitment-agency-flaticons-flat-flat-icons.png',title:'Job Agency' },
  {id:6,kk:'https://img.icons8.com/fluency/512/real-estate.png',title:'Real Estate' },
  {id:7,kk:'https://img.icons8.com/fluency/512/swing.png',title:'Dance Music' },

  {id:8,kk:'https://img.icons8.com/color/512/sports.png',title:'Sport Traner' },
  {id:9,kk:'https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-decoration-usa-flatart-icons-flat-flatarticons-2.png',title:'Decoration' },
  
  
  {id:10,kk:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-event-planning-award-events-flaticons-lineal-color-flat-icons.png',title:'Events' },

  {id:11,kk:'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/512/external-digital-marketing-digital-marketing-flatart-icons-lineal-color-flatarticons.png' 
  ,title:'Digital Support' },
  {id:12,kk:'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-more-interface-kiranshastry-gradient-kiranshastry.png',title:'Others' }
]

  return (
  <>
  <h1 class="h1title">All Servises</h1>
  <div className=" kk ">
    
  {data.map((e) => (
   <>
   
    <div>
       
    <Link to={'/services/'+ e.id} className='lim'> <div className=' boxs '><img className='LKL' src={e.kk}/></div></Link><p className='cattext'>{e.title}</p>
    </div>

    
   </>
       ))}
  </div>
  </>
    

        
  

    
  )
}

export default CategoryHome
