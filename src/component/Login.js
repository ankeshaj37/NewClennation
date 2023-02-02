import React ,{useState}from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const Login = () => {


  const navigate = useNavigate()

  const [loginemail, setloginemail] = useState('')
  const [loginpassword, setloginpassword] = useState('')

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  const loginss =()=>{
signInWithEmailAndPassword(auth, loginemail, loginpassword)
  .then(() => {
    navigate('/dash')
  })
  .catch(() => {
    Alert('SSS')
  });
  }

  const singin =()=>{
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate('/dash')
        db.collection('username').doc(result.user.uid).set({password:password,email:result.user.email,name:name,uid:result.user.uid,isOnline:true,timeStamp:new Date()})
      })
      .catch(() => {
        
      });
      setname('')
      setemail('')
      setpassword('')
      
  }



  return (
  <>
  <Tabs>
    <TabList className='tabss'>
      <Tab>sign in</Tab>
      <Tab>Sign up</Tab>
    </TabList>

    <TabPanel>
    <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">SIGN IN</h2>

  <form class="login-container">
    <p><input type="email" placeholder="Email" value={loginemail} onChange={(e)=>setloginemail(e.target.value)} /></p>

    <p><input type="password" placeholder="Password" value={loginpassword} onChange={(e)=>setloginpassword(e.target.value)}/></p>
   <div className='logindiv'>
   <Link className='loginbtn' onClick={loginss}>SIGN IN</Link>
   </div>
  </form>
</div>
    </TabPanel>

    <TabPanel>

  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

             <div className='singintitle'>
             <p class="text-center h2">SIGN UP</p>
             </div>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" value={email} onChange={(e)=>setemail(e.target.value)} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btns btn-primary btn-lg" onClick={singin}>Sign Up</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://res.cloudinary.com/dgvvfn1gf/image/upload/v1674610877/New_Project_1_ucwq3z.png"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </TabPanel>
  </Tabs>
 
  </>
  )
}

export default Login
