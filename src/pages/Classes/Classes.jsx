import React, { useState } from 'react';
import "./Classes.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Classinfo from "../../components/classInfo/Classinfo";
import grey from '@material-ui/core/colors/grey';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';



const Classes = () => {
	
  const handleSubmission = () => {
	};
  
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="new">
     
      <div className="newContainer">
       
        <div className="box-mainCl">
        <div class="box-cl">
   <div className="box-bodyCl">
       <p className='header-newCl'>Add Class Teacher</p>
       
       <>
        <Form>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">select Title</InputGroup.Text>
       
        <Form.Control as="select" rows={3} >
        <option disabled selected>select Title</option>
        <option>Mr</option>
        <option>Mrs</option>
        <option>Dr</option>
        
      </Form.Control>
     
      </InputGroup>
      <br/>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Surname</InputGroup.Text>
        <Form.Control
          placeholder="Surname"
          aria-label="Surname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
        <Form.Control
          placeholder="First Name"
          aria-label="First Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
        <Form.Control
          placeholder="Last Name"
          aria-label="Last Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
     
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Class Name</InputGroup.Text>
       
        <Form.Control as="select" rows={3} >
        <option disabled selected>select Class</option>
        <option>Primary 1</option>
        <option>Primary 2</option>
        <option>Primary 3</option>
        <option>Primary 4</option>
        <option>Js1</option>
        <option>Js2</option>
      </Form.Control>
     
      </InputGroup>
     
   
    </Form>
        
        </>
        
      
   <div>
       <button type="submit" id="submitBtn" className="saveBtnCl1">Save</button>
       </div>
</div>
</div>


<div class="box-cl2">
   <div className="box-bodyCl2">
   <span className='header-newCl'>Add Class</span>
    <p className="input-infoCl2">
     Class Name
    </p> 
   <input type="text" placeholder="Enter class name" style={{width:"24.8rem",border:`1px solid ${grey[300]}`,outline:"none",fontSize:"15px", fontWeight:"250", height:"35px", marginLeft:"15px"}} />
    <p className='input-instruct'>Kindly enter class name</p>
 <div>
   <button type="submit" id="submitBtn" className="saveBtnCl2">Save</button>
  
			</div>
   </div>
</div>
 </div>
               
      </div>
    </div>

    <div className='classInfoContainer'>
      <Classinfo />
      
    </div>
    </div>
    </div>
  );

}

export default Classes
