import React from 'react'

const Edit = () => {
  return (
    <div className='row'>
        <h2 class='text-center m-2 text-secondary'>Update Services</h2>
        <div className="forms">
           
        <div className="formss">
            <div className="form-row">
                <div className="input-group">
                    <input className="input--style-5" placeholder="Title" />
                    <div className='labe'>
                    </div>
                </div>
            </div><br/>
            <div className="form-row">
                <div className="input-group">
                    <input className="input--style-5" placeholder="Details" />
                    <div className='labe'>
                    </div>
                </div>
            </div><br/>
            <div className="form-row">
                <div className="input-group">
                    <input className="input--style-5" placeholder="Image Url"  />
                    <div className='labe'>
                    </div>
                </div>
            </div><br/>
            <div className="form-row">
                <div className="input-group">
                    <input className="input--style-5" placeholder="Price" />
                    <div className='labe'>
                    </div>
                </div>
            </div><br/>

            <div className="form-row">
                <div className="input-group">
                    <input className="input--style-5" placeholder="Mobile No"  />
                    <div className='labe'>
                    </div>
                </div>
            </div><br/>

            <div className="form-row">
                <div className="input-group">
                    <input className="input--style-5" placeholder="Address"   />
                    <div className='labe'>
                    </div>
                </div>
            </div><br/>
            <div className="form-row">
                <div className="input--style-5 rs-select2 js-select-simple select--no-search">
                    <select className="input--style-5" name="subject"    >
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
                        <option className='optionse' >Wedding</option>
                        <option className='optionse' >Real Estate</option>
                        <option className='optionse' >Ofice Boy Agency</option>
                        <option className='optionse' >Fitness Traner</option>
                        <option className='optionse' >Dance Music</option>
                        <option className='optionse' >Sport Traner</option>
                        <option className='optionse' >Caterers</option>
                        <option className='optionse' >Shifting</option>
                        <option className='optionse' >Others</option>
                    </select>
                    <div className="select-dropdown"></div>
                </div>
            </div><br/>
            <button onClick={'update'}>Update</button>
          
               
            
        </div>
        </div>
        </div>
  )
}

export default Edit
