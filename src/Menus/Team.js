import React,{useState,useEffect} from 'react'
import { db } from '../component/firebase'
import './Team.css'
const Team = () => {

    const [first, setfirst] = useState([])

    useEffect(() => {
      db.collection('team').onSnapshot(tap=>(
        setfirst(tap.docs.map((e)=>(e.data())))
      ))
    }, [])

    return (
        <>
{first.map((e)=>(
    <>
     <div className=' container'>
                <div className=' teamrow row'>
                    <div class="teams col-lg-3">
                        <div className=''>
                            <div className=' teambox'>
                                <img className='teamimg' src={e.image1} />
                            </div>
                            <div class="ss text-center">
                            <div >
                            <h6 >{e.name}</h6>
                            </div>
                           <div   >
                           <p className='infoo'>{e.deta}</p>
                           </div>
                            </div>
                        </div>
                    </div>

                    <div class="teams col-lg-3">
                        <div >
                            <div className=' teambox'>
                                <img className='teamimg' src={e.image2} />
                            </div>
                            <div class="ss text-center">
                            <div >
                            <h6   >{e.name2}</h6>
                            </div>
                           <div   >
                           <p className='infoo'>{e.deta2}</p>
                           </div>
                            </div>
                        </div>

                    </div>
                    <div class="teams  col-lg-3">
                        <div>
                            <div className=' teambox'>
                                <img className='teamimg'src={e.image3} />
                            </div>
                            <div class="ss text-center">
                            <div >
                            <h6 >{e.name3}</h6>
                            </div>
                           <div  >
                           <p className='infoo'>{e.deta3}</p>
                           </div>
                            </div>
                        </div>

                    </div>
                    <div class="teams col-lg-3">
                        <div >
                            <div className=' teambox'>
                                <img className='teamimg' src={e.image4}/>
                            </div>
                            <div class="ss text-center">
                            <div >
                            <h6 >{e.name4}</h6>
                            </div>
                           <div  >
                           <p className='infoo'>{e.deta4}</p>
                           </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    </>
))}
           
        </>
    )
}

export default Team
