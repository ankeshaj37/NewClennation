import { onAuthStateChanged,signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Navbar.css';



const Navbar = () => {
  const [stat, setstat] = useState([])

  onAuthStateChanged(auth, (user) => {
    setstat(user)
  });

  const singoutt =()=>{
    signOut(auth).then(() => {
      
    }).catch(() => {
      
    });
  }

  return (

    <>
  
  <div className='nav container-flued sticky-top'>
    <div className='container'>
      <div className=" navbar sticky-top" >
        <div className="col-6">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <Link to='/'><img className='logoimages' src='https://res.cloudinary.com/dgvvfn1gf/image/upload/v1675317788/CLEANNATIONLOGO_2_f6hz9d.png' /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sudiv col-6">
         <Link to='/pay'><img className='avtar' src='https://res.cloudinary.com/dgvvfn1gf/image/upload/v1676773020/New_Project_1_rfb8fn.png' /></Link>
      

          <div className="btn warning tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <div><img className='burgrr' src='https://img.icons8.com/ios-filled/512/menu-rounded.png' /></div>
          </div>
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
                <Link className='linku' to='/pay'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SELL SERVISES
                </li>
                </Link>
                {stat ? <Link className='linku' to='/dash'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  DASHBOARD
                </li>
                </Link>
                  : ''}
                {stat ? <Link className='linku' to='/' onClick={singoutt}> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SINGOUT
                </li>
                </Link> : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
   

  )
}

export default Navbar
