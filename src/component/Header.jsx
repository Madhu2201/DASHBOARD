import React from 'react';

const Header = () => {
 return (
  <div>
   <h3 id='heading' >Sales Information</h3>
  <div id='flex' >
  <div >
   <p>Customer</p>
   <input className='flex1' type='text' placeholder='Enter Costumer Name'></input>
   </div>
   <div >
    <p>Invoice ID</p>
   <input className='flex1' type='text' placeholder='Enter Invoice ID'></input>
   </div>
   <div >
    <p>Start Date</p>
   <input className='flex1' type='text' placeholder='Start Date'></input>
   </div>
   <div >
    <p>End Date</p>
   <input className='flex1' type='text' placeholder='End Date'></input>
   </div>
  </div>
  </div>
 );
};

export default Header;