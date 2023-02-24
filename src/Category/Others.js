import React, { useState, useEffect } from 'react'
import { db } from '../component/firebase'
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Others = () => {

  const [first, setfirst] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Others').onSnapshot(tap => (
      setfirst(tap.docs.map((e) => (e.data())))
    ))
  }, [])
  const book = () => {
    navigate('/form')
  }

  console.log(first);
  return (
    <div>
      <Helmet>
        <title>Low Cost Services Near Me | Cleannation</title>
        <meta name="description" content=" We offer everything, from cleaning and maintenance to event organizing and fitness instruction. Our services are reasonable, dependable, and delivered by qualified experts. To find out more about our offerings and how we can help you save time and money, get in touch with us right now." />
        <meta name="keywords" content="Services that are low cost, affordable, and local include cleaning, maintenance, event planning, fitness instruction, office cleaning, car cleaning, chandelier cleaning, dance instruction, decoration, website design, SEO, and social media marketing." />
        
      </Helmet>

      <div className='container'>
        {first.map((e) => (
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
                <br />
                <div><h5>₹ {e.Price}</h5></div>
                <br />

                
                <a href={e.address} target="_blank" className='linku'><div className='locdiv'><div className='shsh'><img className='loca'
                   src='https://img.icons8.com/ios-filled/512/place-marker.png' /></div></div></a><div className='buttdiv'>
                  <button className="buttdiv"><a className="buttdiv" href={"tel:7021595850"}>Call</a></button>
                  <button className='buttdiv' onClick={book}>Enquiry</button>
                </div>
              </div>

            </div>
          </>
        ))}
      </div>



    </div>
  )
}

export default Others
