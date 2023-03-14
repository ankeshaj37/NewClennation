import React, { useState, useEffect } from 'react'

import { db } from '../component/Firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChandelierClean = () => {

  const navigate = useNavigate()

  const [first, setfirst] = useState([])

  useEffect(() => {
    db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Chandelier Cleaning').onSnapshot(tap => (
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
        <title>Low-Cost Chandelier Cleaning Services Near Me | Cleannation</title>
        <meta name="description" content="We offer affordable chandelier cleaning services near you. Contact us to schedule a cleaning today and make your chandelier shine like new again!" />
        <meta name="keywords" content="chandelier cleaning, commercial chandelier cleaning,chandelier repair and cleaning,professional chandelier services,cleaning chandelier glass,best way to clean a crystal chandelier," />
        <meta name="keywords" content="chandelier cleaning, commercial chandelier cleaning,chandelier repair and cleaning,professional chandelier services,cleaning chandelier glass,best way to clean a crystal chandelier,jhoomar cleaning"
        />
      </Helmet>
      <Tabs>
        <TabList>
          <Tab>Chandelier Cleaning</Tab>
          <Tab>Reference Product</Tab>
          <Tab>Social Media</Tab>
        </TabList>

        <TabPanel>
          <div className='container'>
            {first.map((e) => (
              <>
                <div className=' eee row'>
                  <div className='ass col-lg-6'>
                    <div className='imgedivvv'>
                      <img className='imagesss' src={e.image} alt="chandelier"></img>
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


                    <a href={e.address} target="_blank" className='linku'><div className='locdiv'><div className='shsh'><img className='loca'alt="icons"
                      src='https://img.icons8.com/ios-filled/512/place-marker.png' /></div></div></a><div className='buttdiv'>
                      <button className='buttdiv' ><a className="buttdiv" href={"tel:7021595850"}>Call</a></button>
                      <button className='buttdiv' onClick={book}>Enquiry</button>
                    </div>
                  </div>

                </div>
              </>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Coming Soon..</h2>
        </TabPanel>
        <TabPanel>
          <h2>Coming Soon..</h2>
        </TabPanel>

      </Tabs>


    </div>
  )
}

export default ChandelierClean
