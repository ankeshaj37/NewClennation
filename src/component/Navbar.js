
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';



const Navbar = () => {


  return (

    <>
        <div className=" navbar sticky-top" >
          <div className="col-6">
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Link to='/'><img src=''/> <h3 className="animate-charcter">Cleannation</h3></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sudiv col-6">

            <button className=" tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"><img className='burgrr' src='https://img.icons8.com/ios-filled/512/menu-rounded.png' /></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                 
                  <Link className='linku' to='/'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  HOME
                  </li>
                  </Link>

                  <Link className='linku' to='/Category'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SERVICE
                  </li>
                  </Link>

                  <Link className='linku' to='/about'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  ABOUT US
                  </li>
                  </Link>

                  <Link className='linku' to='/offer'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  OFFER
                  </li>
                  </Link>

                  <Link className='linku' to='/team'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  TEAM
                  </li>
                  </Link>

                  <Link className='linku' to='/contactus'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  CONTACT US
                  </li>
                  </Link>
                 
                </ul>
              </div>

            </div>
          </div>
        </div>
     
    </>

  )
}

export default Navbar
