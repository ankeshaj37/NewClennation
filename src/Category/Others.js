import React ,{useState,useEffect} from 'react'
import { db } from '../component/firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link ,useNavigate} from 'react-router-dom';
const Others = () => {
 
  const [first, setfirst] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
  db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Others').onSnapshot(tap=>(
      setfirst(tap.docs.map((e)=>(e.data())))
    ))
  }, [])
  const book =()=>{
    navigate('/form')
  }

  console.log(first);
  return (
    <div>
    <Tabs>
             <TabList>
               <Tab>Title 1</Tab>
               <Tab>Title 2</Tab>
               <Tab>Title 3</Tab>
               <Tab>Title 4</Tab>
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
               <h2>heth</h2>
             </TabPanel>
             <TabPanel>
               <h2>rohit</h2>
             </TabPanel>
             <TabPanel>
               <h2>shubham</h2>
             </TabPanel>
           </Tabs>

    
   </div>
  )}

export default Others
