import React ,{useState,useEffect} from 'react'
import { db } from '../component/firebase'
import './Offer.css'
const Offer = () => {

  const [offer, setoffer] = useState([])

  useEffect(() => {
    db.collection('offer').onSnapshot(tap=>(
      setoffer(tap.docs.map((e)=>(e.data())))
    )
      )
  }, [])
  
  return (
    <div>
      {offer.map((e)=>(
        <>
          <div class="offer text-center">
  <div class="card-header">
  <h3>{e.title1}</h3>
  </div>
  <div class="card-body">
    <h6 class="card-title">{e.title2}</h6>
    <p class="card-text">{e.title3}</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
  <div class="card-footer text-muted">
   {e.title4}
  </div>
</div>
        </>
      ))}
    

    </div>
  )
}

export default Offer
