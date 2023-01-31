import React from 'react'
import './Form.css'
const Form = () => {
    
  return (
    <>
    <div className='formdiv'>
     <form class=" formmm row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone No</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Remark </label>
    <input type="text" class="form-control" id="inputAddress2"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
  <label for="inputState" class="form-label">Services</label>
    <select id="inputState" class="form-select">
      <option selected>Choose Services</option>
      <option>...</option>
    </select>
  </div>
 <p></p>
  <div class="col-12">
    <button type="submit" class="text-center">submit</button>
  </div>
</form>
    </div>
    </>
  )
}

export default Form
