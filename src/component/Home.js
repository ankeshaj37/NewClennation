
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {


    const [search, setsearch] = useState('')


    const data = [
        {
            id: 1, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506918/gd_gh11tp.jpg',
            title: 'House Cleaning', infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!'
        },
        { id: 2, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506919/kdq_dymdzy.jpg', title: 'Car Cleaning', infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        {
            id: 3, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506918/gj_vlsfrg.jpg', title: 'Chandelier Cleaning'
            , infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!'

        },
        { id: 4, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506919/ka_zqte4u.jpg', title: 'All Types Of Shifting',
         infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        { id: 5, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506919/a_ulnuw8.jpg', title: 'All Types Of Contract',
         infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        { id: 6, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506918/egw_susiti.png', title: 'Real Estate', 
        infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        {
            id: 7, kk: 'https://danceteacherfinder.com/wp-content/uploads/2017/04/Milton-Ontario-Dance-Studios-Looking-for-Dance-Teachers-Dance-Teaching-Jobs-Available-for-Toronto-Dance-Instructors.jpg',
            title: 
            'Dance Music', infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!'
        },
       
        
        { id: 8, kk: 'https://www.samford.edu/news/2019/10/AthleticTraineroftheYear.jpg', title: 'Sport Traner', infor:
         'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        { id: 9, kk: 'https://deowgxgt4vwfe.cloudfront.net/uploads/1557818214_original.jpg', title: 'All Types Of Decoration', infor: 
        'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        
        { id: 10, kk: 'https://tse1.mm.bing.net/th?id=OIP.APZnyy6WFQzg7J9nLzgT8QHaE8&pid=Api&P=0', title: 'All Types Of Events', infor:
         'Our Success Is In Cleaning Up Your Mess At An Affordable Price!' },
        {
            id: 11, kk: 'https://res.cloudinary.com/clennation/image/upload/v1658506918/hw_wb8pr5.jpg'
            , title: 'Digital Support', infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!'
        },
        {
            id: 12, kk: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-more-interface-kiranshastry-gradient-kiranshastry.png', title: 'Others'
            , infor: 'Our Success Is In Cleaning Up Your Mess At An Affordable Price!'
        }
    ]
    return (
        <>
            <div className='aa row'>
                <div class="search-box">
                    <input type="text" name="name" class="search-txt" placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
                    <a class="search-btn" href="#">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            {data.filter((e) => (e.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)).

                map((e) => (
                    <>
                        <div className='container'>
                            <div className=' box row'>
                                <div className='imgcer col-lg-4'>
                                    <img className='imagess' src={e.kk} />
                                    <div className=" ww spinner-border text-warning" role="status"></div>
                                </div>
                                <div className=' taxtdiv col-lg-8'>
                                    <div className='boxdiv'>
                                        <h2 className='h2title'>{e.title}</h2>
                                        <p className='pdescri'>{e.infor}</p>
                                        <Link className='butt' to={'/services/' + e.id}> <button >CHECK NOW</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}

        </>
    )
}

export default Home
