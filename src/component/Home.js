
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from './firebase';
import './Home.css';


const Home = () => {

    const [datas,setdatas]= useState([])
    const [search,setsearch]= useState('')

  useEffect (()=>{
    db.collection('services').onSnapshot(tap=>(
        setdatas(tap.docs.map((e)=>({uid:e.id,data:e.data()})))
    ))
  },[])
    return (
        <>
            <div className=' container-flued'>
                <div className='aa row'>
                    <div class="search-box">
                        <input type="text" name="name" class="search-txt" placeholder="Search" value={search} onChange={(e)=>setsearch(e.target.value)}/>
                        <a class="search-btn" href="#">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                
                <div className='container'>
                {datas.filter((e) => (e.data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) )
                  
                  .map((e)=>(
                    <>
                            <div className=' box row'>
                    <div className='imgcer col-lg-4'>
                        <img className='imagess' src={e.data.image} />
                        <div className=" ww spinner-border text-warning" role="status"></div>
                    </div>
                    <div className=' taxtdiv col-lg-8'>
                        <div className='boxdiv'>
                            <h2 className='h2title'>{e.data.title}</h2>
                            <p className='pdescri'>{e.data.infor}</p>
                           <Link to={`/:id/${e.uid}`}> <button >CHECK NOW</button></Link>
                        </div>
                    </div>
                </div>
                    </>
                  ))}                    
                </div>
            </div>

        </>
    )
}

export default Home
