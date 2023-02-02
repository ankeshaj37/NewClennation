import React ,{useState,useEffect} from 'react'
import { db } from '../component/firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link ,useNavigate} from 'react-router-dom';
const Sports = () => {
 
  const [first, setfirst] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
  db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Sport Traner').onSnapshot(tap=>(
      setfirst(tap.docs.map((e)=>(e.data())))
    ))
  }, [])

  const book =()=>{
    navigate('/form')
  }


  return (
    <div>
    <Tabs>
    <TabList>
               <Tab>Home</Tab>
               <Tab>Category 1</Tab>
               <Tab>Category 2</Tab>
               <Tab>Category 3</Tab>
             </TabList>
             <TabPanel>
             <div className='container'>
           {first.map((e)=>(
       <>
<div className=' eee row'>
  <div className='ass col-lg-6'>
<div className='imgedivvv'>
  <img className='imagesss' src={e.image}></img>
</div>

  </div>
   <div className='col-lg-6'>
<div><h3>{e.title}</h3></div>
<div><details>
  <summary>Details</summary>
  <h6>{e.infor}</h6>
</details></div>
<br/>
<div><h5>{e.Price}</h5></div>
<br/>

<div className='locdiv'><div className='shsh'><img className='loca' src='https://img.icons8.com/ios-filled/512/place-marker.png'/></div><h6>{e.address}</h6></div>
<div className='buttdiv'>
<button className="buttdiv"><a className="buttdiv" href={"tel:" + e.mobile}>Call Now</a></button>
  <button className='buttdiv' onClick={book}>Book Now</button>
</div>
  </div>

</div>
</>
     ))}
     </div>
             </TabPanel>
             <TabPanel>
               <h2>Coming Soon ..</h2>
             </TabPanel>
             <TabPanel>
             <h2>Coming Soon ..</h2>
             </TabPanel>
             <TabPanel>
             <h2>Coming Soon ..</h2>
             </TabPanel>
           </Tabs>

       
   </div>
  )}

export default Sports
