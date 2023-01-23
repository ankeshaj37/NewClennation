import React, { useState } from 'react'
import './Home.css';


const Home = () => {


    return (
        <>
            <div>
                <div class="search-box">
                    <input type="text" name="name" class="search-txt" placeholder="Search" />
                    <a class="search-btn" href="#">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </a>

                </div>

            </div>
            <div className='box container'>
                <div className='row'>
                    <div className='imgcer col-lg-4'>
                        <div className='cercle'>
                            <img className='imagess' src='https://res.cloudinary.com/clennation/image/upload/v1658506919/kdq_dymdzy.jpg' />
                        </div>
                    </div>
                    <div className=' taxtdiv col-lg-8'>
                        <div className='boxdiv'>
                            <h2 className='h2title'>Car Cleaning & Dusting</h2>
                            <p className='pdescri'>You will get house cleaning services according to you with low cost</p>
                            <button className='butonboo'>CHECK NOW</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home
