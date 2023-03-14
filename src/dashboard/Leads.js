import React, { useState, useEffect } from 'react'
import { db } from '../component/Firebase'

const Leads = () => {

  const [first, setfirst] = useState([])

  useEffect(() => {
    db.collection('order').onSnapshot(tap => (
      setfirst(tap.docs.map((e) => (e.data())))
    ))
  }, [])

  console.log(first);


  return (
    <>
{first.map((e,i)=>(
  <>
      <div className='formdiv'>
        
        <form class=" formmm row g-3">
        <h4>Order{i+1}</h4>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Name</label>
            <div className='ff'>{e.name}</div>
          </div>
          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Phone No</label>
            <div className='ff'>{e.number}</div>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <div className='ff'>{e.address}</div>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Remark </label>
            <div className='ff'>{e.remark}</div>
          </div>
          <div class="col-md-12">
            <label for="inputCity" class="form-label">City</label>
            <div className='ff'>{e.city}</div>
          </div>
          <div class="col-md-12">
          <label for="inputCity" class="form-label">Services</label>
            <div className='ff'>{e.services}</div>
          </div>
          <p></p>
          <div class="col-12">
            
          </div>
        </form>
      </div>
  </>
))}
    </>
  )
}

export default Leads
