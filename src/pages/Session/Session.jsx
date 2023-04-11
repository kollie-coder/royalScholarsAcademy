import React, { useState } from 'react';
import "./Session.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Sessioninfo from '../../components/sessionInfo/Sessioninfo';
import grey from '@material-ui/core/colors/grey';


const Session = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="new">
       
      <div className="newContainer">
        <div className='instruction-div'>
          <p>Add session in the format 2014/2015</p>
          <p>Note: Session set to current by Default</p>
        </div>
       
        <div className="box-main">
        <div class="box-se">
   <div className="box-body">
   <span className='header-new'>Add Session</span>
    <p className="input-info">
     Add Session
    </p> 
   <input type="text" placeholder="Enter session name" style={{width:"29rem",border:`1px solid ${grey[300]}`,outline:"none",fontSize:"15px", fontWeight:"250", height:"35px", marginLeft:"15px"}} />
    <p className='input-instruct'>Kindly enter session name</p>
 <div>
   <button type="submit" id="submitBtn" className="saveBtn">Save</button>
  
			</div>
</div>
</div>


<div class="box-se2">
   <div className="box-body2">
   <span className='header-new'>Add Term</span>
    <p className="input-info">
     Term Name
    </p> 
   <input type="text" placeholder="Enter Term name" style={{width:"29rem",border:`1px solid ${grey[300]}`,outline:"none",fontSize:"15px", fontWeight:"250", height:"35px", marginLeft:"15px"}} />
    <p className='input-instruct'>Kindly enter Term name</p>
 <div>
   <button type="submit" id="submitBtn" className="saveBtn">Save</button>
  
			</div>
   </div>
</div>
 </div>
               
      </div>
    </div>

    <div className='classInfoContainer'>
     <Sessioninfo />
      
    </div>
    </div>
    </div>
  );

}
export default Session;
 