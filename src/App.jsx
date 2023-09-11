import React from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import './App.css'
import Searchboxs from './component/Searchboxs';
import Tables from './component/Tables';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
  <div className='container-xl' id='layout'style={{  width:"800px"}} >
  
    
    <div className='container-sm' id='content1'>
        <Nav/>
      </div>
      <div className='container-sm' id='content2'>
    <Searchboxs />
    </div>
     
      <div className='container-sm' id='content3'>
       
        <Header/>
      </div>
      <div className='container-sm' id='content4'>
      <Tables />
      </div>
    </div>
    
  );
};

export default App;