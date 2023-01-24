import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryHome.css';


const CategoryHome = () => {

 

 const data = [
  {id:1,kk:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-real-estate-moving-and-storage-flaticons-lineal-color-flat-icons.png',title:'House Cleaning',},
  {id:2,kk:'https://img.icons8.com/fluency/512/car-cleaning.png',title:'Car Cleaning' },
  {id:3,kk:'https://img.icons8.com/external-nawicon-outline-color-nawicon/512/external-chandelier-living-room-nawicon-outline-color-nawicon.png' ,title:'Chandelier Clean'}, 
  {id:12,kk:'https://img.icons8.com/fluency/512/housekeeping.png',title:'Houes Keeping'},
  {id:5,kk:'https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Moving-Home-real-estate-vectorslab-flat-vectorslab.png' ,title:'Shifting' },
  
  {id:6,kk:'https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-job-recruitment-agency-flaticons-flat-flat-icons.png',title:'Job Agency' },
  {id:13,kk:'https://img.icons8.com/fluency/512/real-estate.png',title:'Real Estate' },
 
  {id:9,kk:'https://img.icons8.com/fluency/512/swing.png',title:'Dance Music' },
  {id:8,kk:'https://img.icons8.com/color/512/weightlift.png',title:'Fitness Traner' },
  {id:8,kk:'https://img.icons8.com/color/512/sports.png',title:'Sport Traner' },
  
  {id:4,kk:'https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-decoration-usa-flatart-icons-flat-flatarticons-2.png',title:'Decoration' },
  {id:15,kk:'https://img.icons8.com/external-justicon-lineal-color-justicon/512/external-wedding-romantic-love-justicon-lineal-color-justicon.png',title:'Wedding' },
  {id:11,kk:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-event-planning-award-events-flaticons-lineal-color-flat-icons.png',title:'Events' },



  {id:14,kk:'https://img.icons8.com/nolan/512/google-code.png',title:'Programming' },
  {id:7,kk:'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/512/external-digital-marketing-digital-marketing-flatart-icons-lineal-color-flatarticons.png' 
  ,title:'Digital Support' },
  
  {id:16,kk:'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-more-interface-kiranshastry-gradient-kiranshastry.png',title:'Others' }
]
{/* <Route path="/services/1" element={<HouseCleaning />} />
<Route path="/services/2" element={<CarCleaning />} />
<Route path="/services/3" element={<ChandelierClean />} />
<Route path="/services/4" element={<HouesKeeping />} />
<Route path="/services/5" element={<Shifting />} />
<Route path="/services/6" element={<JobAgency />} />
<Route path="/services/7" element={<RealEstate />} />
<Route path="/services/8" element={<Dance />} />
<Route path="/services/9" element={<Fitness />} />
<Route path="/services/10" element={<Sports />} />
<Route path="/services/11" element={<Decoration />} />
<Route path="/services/12" element={<Wedding />} />
<Route path="/services/13" element={<Events/>} />
<Route path="/services/14" element={<Programming />} />
<Route path="/services/15" element={<Digital />} />
<Route path="/services/16" element={<Others />} /> */}

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
