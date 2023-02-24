
import React, { useState } from 'react'
import { db } from '../component/firebase'
import KeyEnter from '../component/KeyEnter'
import './AddServices.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {

    const [title, settitle] = useState('')
    const [infor, setinfor] = useState('')
    const [image, setimage] = useState('')
    const [Price, setPrice] = useState('')
    const [Mobile, setMobile] = useState('')
    const [address, setaddress] = useState('')
    const [select, setselect] = useState([])
    console.log(title);

    const post = () => {
        db.collection('cetegory').doc('MA8P3Re6z9Qy4V1silHS').collection(select).add({ title: title, infor: infor, image: image, Price: Price, Mobile: Mobile, address: address })
        settitle('')
        setinfor('')
        setimage('')
        setPrice('')
        setMobile('')
        setselect('')
        setaddress('')
        db.collection('services').add({ title: title, infor: infor, image: image, Price: Price, Mobile: Mobile, address: address })

        toast("Successful");
    }


    KeyEnter(post, "Enter");

    return (
        <>
            <div className='container addti'>
                <div className='row '>
                    <h2 className='addti'>Add Services</h2>
                    <div className="forms">

                        <div className="formss">
                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />
                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Details" value={infor} onChange={(e) => setinfor(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />
                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Image Url" value={image} onChange={(e) => setimage(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />

                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />

                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Mobile No" value={Mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />

                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />
                            <div className="form-row">
                                <div className="input--style-5 rs-select2 js-select-simple select--no-search">
                                    <select className='selecter' value={select} onChange={(e) => setselect(e.target.value)} >
                                        <option selected>Choose Category</option>
                                        <option className='optionse' >Car Cleaning</option>
                                        <option className='optionse' >Home Cleaning</option>
                                        <option className='optionse' >Chandelier Cleaning</option>
                                        <option className='optionse' >Events</option>
                                        <option className='optionse' >Digital Support</option>
                                        <option className='optionse' >Decoration</option>
                                        <option className='optionse' >House Keeping</option>
                                        <option className='optionse' >Designer</option>
                                        <option className='optionse' >Programming</option>
                                        <option className='optionse' >Wedding Decoration</option>
                                        <option className='optionse' >Real Estate</option>
                                        <option className='optionse' >Contract Agency</option>
                                        <option className='optionse' >Fitness Traner</option>
                                        <option className='optionse' >Dance Music</option>
                                        <option className='optionse' >Sport Traner</option>
                                        <option className='optionse' >Caterers</option>
                                        <option className='optionse' >Shifting</option>
                                        <option className='optionse' >Others</option>
                                    </select>
                                    <div className="select-dropdown"></div>
                                </div>
                            </div><br />
                            <button onClick={post}>add</button>


                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddServices
