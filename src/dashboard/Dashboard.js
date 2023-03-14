import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    
    
  return (
    <div>
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-between ">
                    <div>
                        <span className="font-weight-bold project"><h2>Dashboard</h2></span>
                    </div>
                </div>
                <div className=" dsv row mb-5">
                    <div className="col-md-4 mt-3 text-center">
                        <Link className='minlin' to='/add'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Post Service</h6>
                                <img src="https://img.icons8.com/ios-glyphs/512/plus-2-math.png" width="50" alt="icons"></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-3 text-center">
                        <Link className='minlin' to='/totler'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Totale Services</h6>
                                <img src="https://img.icons8.com/glyph-neue/512/check-all.png" width="50" alt="icons"></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-3 text-center">
                        <Link  to='/leads' className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Order Leads</h6>
                                <img src="https://img.icons8.com/glyph-neue/512/order-history.png" width="50" alt="icons"></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-3 text-center">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Help</h6>
                                <img src="https://img.icons8.com/ios-filled/512/help.png" width="50" alt="icons"></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-3 text-center">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Create Business Profile</h6>
                                <img src="https://img.icons8.com/ios-filled/256/contract-job.png" alt="icons" width="50" ></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-3 text-center">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Change Location</h6>
                                <img src="https://img.icons8.com/ios-filled/512/place-marker.png" width="50" alt="icons"></img>
                            </div>
                        </Link>
                    </div>             
                </div>
            </div>
        </>
    </div>
  )
}

export default Dashboard
