import React, { useState, useEffect } from 'react'
import { db } from '../component/firebase'
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dance = () => {

  const navigate = useNavigate()

  const [first, setfirst] = useState([])

  useEffect(() => {
    db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Dance Music').onSnapshot(tap => (
      setfirst(tap.docs.map((e) => (e.data())))
    ))
  }, [])

  console.log(first);

  const book = () => {
    navigate('/form')
  }

  return (

    <div>
      <Helmet>
        <title>Low-Cost Dance Training Teacher Near Me | Cleannation</title>
        <meta name="description" content="Are you trying to find a local dancing instructor who charges little? Make an appointment for your first lesson with us right now to begin developing your dance abilities." />
        <meta name="keywords" content="affordable dance classes, dance lessons, local dance teachers, dance instructors, economical dance training, 
        dance classes for adults, and dance classes for children,dance teacher course online,becoming a dance teacher" />
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

export default Dance
