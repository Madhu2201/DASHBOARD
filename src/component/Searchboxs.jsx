import React from 'react';
import {FaBell,FaSearch} from 'react-icons/fa'

const Searchboxs = () => {
 return (
  
    <div>
     
     <input  type="text" placeholder='Search' id='searchbox'></input>
     <FaSearch  id='searchicons'/>
    
<FaBell id='icons'/>
   

   </div>
  
 );
};

export default Searchboxs;