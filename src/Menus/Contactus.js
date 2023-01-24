import React from 'react'
import './Contactus.css'

const Contactus = () => {


    return (

        <>
            <div className=' contavv container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='maps' >
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.701644870147!2d72.79994946882877!3d19.132846999913813!
   2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b60aed991b75%3A0xf021e3f7da753ad4!2sShiv%20Galli%2C%20Versova%2C%20Andher
   i%20West%2C%20Mumbai%2C%20Maharashtra%20400061!5e0!3m2!1sen!2sin!4v1674543481164!5m2!1sen!2sin" width="300" height="250"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        
                    </div>
                    <div className='col-lg-6'>
                        <div className="form-body">
                        <div className="form-row">
                                    <div className="input-group">
                                        <input className="input--style-5" placeholder="Name" type="text" name="company" />
                                        <div className='labe'>
                                        </div>
                                    </div>
                                </div><br/>
                                <div className="form-row">
                                    <div className="input-group">
                                        <input className="input--style-5" placeholder="Phone No " type="text" name="company" />
                                        <div className='labe'>
                                        </div>
                                    </div>
                                </div><br/>
                                <div className="form-row">
                                    <div className="input-group">
                                        <input className="input--style-5" placeholder="Remark" type="text" name="company" />
                                        <div className='labe'>
                                        </div>
                                    </div>
                                </div><br/>
                                <button>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contactus
