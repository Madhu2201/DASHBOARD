import React from 'react';
import {BsFillGridFill} from 'react-icons/bs'
import {MdEventAvailable} from 'react-icons/Md'
import {FaBriefcaseMedical ,FaWallet} from 'react-icons/fa'
import {BiSolidMessageDetail,BiSolidMessage} from 'react-icons/bi'
import {RiSettings5Fill} from 'react-icons/ri'
const Nav = () => {
 return (
  <div>
   <div>
    <h3 id='list'>Medico Sales</h3>

   </div>
   <div >
   <div className='icon1' id='list1' >
    <BsFillGridFill/>
    <p>Dashboard</p>
   </div>
   <div className='icon1'>
    <MdEventAvailable/>
    <p>Lap Test</p>
   </div>
   <div className='icon1'>
    <FaBriefcaseMedical/>
    <p>Appointment</p>
   </div> 
   <div className='icon1'>
    <BiSolidMessageDetail/>
    <p>Medicine Order</p>
   </div>
   <div className='icon1'>
   <BiSolidMessage/>
    <p>Message</p>
   </div >
   <div className='icon1'>
    <FaWallet/>
    <p>Payment</p>
   </div>
   <div className='icon1'>
    <RiSettings5Fill/>
    <p>Setting</p>
   </div>
   </div>
   
  </div>
 );
};

export default Nav;