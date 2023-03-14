import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db, } from '../component/Firebase'
import './TotaleServices.css'



const TotaleServises = () => {

    const navigate = useNavigate()

    const [state, setstate] = useState([])

    useEffect(() => {
        db.collection('services').onSnapshot(tap => (
            setstate(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
        ))
    }, [])

    const delets = (uid) => {
        db.collection('services').doc(uid).delete()
    }
    const edits = () => {
        navigate('/edit')
    }

    return (
        <div className='container'>
            {state
                .map((e) => (
                    <>
                    
                            <div className='totalerow row'>
                                <div className=' imge col-lg-6'>
                                    <div>
                                        <img className='imasss' src={e.data.image}></img>
                                    </div>
                                </div>
                                <div className='tess col-lg-6'>
                                    <h5>{e.data.title}</h5>
                                    <p>{e.data.infor}</p>
                                    <h5>{e.data.price}</h5>
                                    <h5>{e.data.Mobile}</h5>
                                    <h5>{e.data.address}</h5>
                                </div>
                                <div className='buton'>
                                    <button onClick={edits}>Edit</button>
                                    <button onClick={() => delets(e.uid)}>Delete</button>
                                </div>
                            </div>
                        
                 
                    </>

                ))}
        </div>
    )
}

export default TotaleServises
