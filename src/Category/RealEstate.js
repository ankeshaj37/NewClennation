import React, { useState, useEffect } from 'react'
import { db } from '../component/firebase'
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Programming = () => {

  const [first, setfirst] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Real Estate').onSnapshot(tap => (
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
        <title>Low-Cost Office Staff Contractor Near Me | Cleannation</title>
        <meta name="description" content="Housekeeping contracts, office boy contracts, and other office staff contractor services are all provided by your company at reasonable prices. Make an appointment with our team of knowledgeable and dependable professionals by getting in touch with us right away." />
        <meta name="keywords" content="Office staff contractor, housekeeping contract, office boy contract, low cost, low cost, nearby, qualified, experienced, and dependable" />

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

export default Programming
