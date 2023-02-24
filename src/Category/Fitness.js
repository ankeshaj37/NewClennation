import React, { useState, useEffect } from 'react'
import { db } from '../component/firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Fitness = () => {

  const [first, setfirst] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection('Fitness Traner').onSnapshot(tap => (
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
        <title>Low-Cost Fitness Trainer Near Me | Cleannation</title>
        <meta name="description" content="Searching for a cheap fitness instructor nearby? Cleannation provides individualised fitness plans created to support you in meeting your fitness objectives without going over budget. Call us right away to arrange your no-cost consultation!" />
        <meta name="keywords" content="fitness, personal training, gym, low-cost, affordable, local, trainer, workout, exercise" />
      </Helmet>
      <Tabs>
        <TabList>
          <Tab>Gym Trainers</Tab>
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
        </TabPanel>
        <TabPanel>
          <h2>Coming Soon ..</h2>
        </TabPanel>
        <TabPanel>
          <h2>Coming Soon ..</h2>
        </TabPanel>
      </Tabs>


    </div>
  )
}

export default Fitness
