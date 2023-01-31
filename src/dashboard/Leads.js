import React from 'react'

const Leads = () => {
  return (
  <>
  <div className='container'>
    <div className='row'>
    <table class="table-responsive table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Service</th>
      <th scope="col">Address</th>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>kikl</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    
  </tbody>
</table>
    </div>
  </div>
  </>
  )
}

export default Leads
