import React, { useState, useEffect } from 'react'
import { db } from '../component/firebase'
import './About.css'

const About = () => {
  const [title1, settitle1] = useState([])

  useEffect(() => {
    db.collection('about').onSnapshot(tap => (
      settitle1(tap.docs.map((e) => (e.data())))
    ))
  }, [])


  return (
    <div>
      {title1.map((e) => (
        <>
        <div className='container'>
        <div class="about row">
            <div className='col-lg-6'>
              <img className='imahe' src={e.image}/>
            </div>
            <div className='col-lg-6'>
              <h1 className='h2us'>{e.name}</h1>
              <h4 className='h2title'>{e.head1}</h4>
              <p>{e.info1}</p>
              <h4 className='h2title'>{e.head2}</h4>
              <p>{e.info2}</p>
              <div class="data">
                <a href="#" class="hire" >Follow Us</a>
              </div>
            </div>
          </div>
        </div>
        
        </>
      ))}
    </div>
  )
}

export default About
