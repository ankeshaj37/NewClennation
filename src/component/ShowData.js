import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { db } from './Firebase';



const ShowData = () => {
  const [first, setfirst] = useState([])

  useEffect(() => {
    db.collection('services').doc(ankesh.id).onSnapshot(tap=>(
      setfirst(tap.docs.map((e)=>(e.data())))
    ))
  }, [])
  

  const ankesh = useParams()

  console.log(ankesh.id);
   
  console.log();
  return (
    <div>
{first.map((e)=>(
  <>
  <p>{e.title}</p>
  </>
))}
    </div>
  )
}

export default ShowData
