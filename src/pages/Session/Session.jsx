import React, { useState } from 'react';
import "./Session.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Sessioninfo from '../../components/sessionInfo/Sessioninfo';
import grey from '@material-ui/core/colors/grey';


const Session = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputTerm, setInputTerm] = useState('');

  // handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // handle form submission
  const handleSubmit = (e) => {
    console.log(inputValue);

    e.preventDefault();
    fetch('http://francisop.pythonanywhere.com/school/session/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_name: inputValue }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {

        console.error(err);
      });
    }

    

      // handle input change
  const handleChange1 = (e) => {
    setInputTerm(e.target.value);
  };

  // handle form submission
  const handleSubmit1 = (e) => {
    console.log(inputTerm);

    e.preventDefault();
    fetch('http://francisop.pythonanywhere.com/school/term/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ term_name: inputTerm }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {

        console.error(err);
      });
  };
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
   <form onSubmit={handleSubmit}>
   <span className='header-new'>Add Session</span>
    <p className="input-info">
     Add Session
    </p> 
    

   
   <input type="text" placeholder="Enter session name" value={inputValue} onChange={handleChange} style={{width:"29rem",border:`1px solid ${grey[300]}`,outline:"none",fontSize:"15px", fontWeight:"250", height:"35px", marginLeft:"15px"}} />
    <p className='input-instruct'>Kindly enter session name</p>
 <div>
   <button type="submit" id="submitBtn" className="saveBtn">Save</button>
   </div>
   </form>
			
</div>
</div>


<div class="box-se2">
   <div className="box-body2">
    <form onSubmit={handleSubmit1}>
   <span className='header-new'>Add Term</span>
    <p className="input-info">
     Term Name
    </p> 
   <input type="text" onChange={handleChange1} value={inputTerm} placeholder="Enter Term name" style={{width:"29rem",border:`1px solid ${grey[300]}`,outline:"none",fontSize:"15px", fontWeight:"250", height:"35px", marginLeft:"15px"}} />
    <p className='input-instruct'>Kindly enter Term name</p>
 <div>
   <button type="submit" id="submitBtn" className="saveBtn">Save</button>
  
			</div>
      </form>
      </div>
    
  
</div>
 </div>
               
      </div>
    </div>

    <div className='sessionInfoContainer'>
     <Sessioninfo />
      
    </div>
    </div>
    </div>
  );

}
export default Session;
 