import React, { useState, useEffect } from 'react';
import "./new.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import clsx from 'clsx';
import Select from '@material-ui/core/Select';
import grey from '@material-ui/core/colors/grey';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@mui/material';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';




	


const New = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [selectedSession, setSelectedSession] = useState('');
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [othername, setOtherName] = useState('');
  const [gender, setGender] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  

  


  useEffect(() => {
    axios.get('http://francisop.pythonanywhere.com/school/session/')
      .then(response => {
        setData1(response.data);
        console.log(data1);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

   useEffect(() => {
    axios.get('http://francisop.pythonanywhere.com/school/class/')
      .then(response => {
        setData2(response.data);
        console.log(data2);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handleSessionSelect(event) {
    setSelectedSession(event.target.value);
  }

   function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleClassSelect(event) {
    setSelectedClass(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://francisop.pythonanywhere.com/register/';
    
    const data = {
       session: Number(selectedSession),
        last_name: surname,
        first_name: firstName,
        other_name: othername,
        gender: gender,
        school_class: Number(selectedClass),
        role: "student",
        id : Number(selectedClass, selectedSession)
    };

    fetch(url, {

       method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Content-Type': 'application/json',
      }
    })
   
      .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.reload();
    })

    
    .catch((error) => {
      console.error('Error:', error);
    });
}
  
  
  

    const handleFileChange = (event) => {
      if(event.target.files.length > 0){
        setSelectedFile(event.target.files[0]);
      }
    };

    
    const validateSelectedFile = () => {
      const MIN_FILE_SIZE = 15 // 15kb
      const MAX_FILE_SIZE = 32 // 32kb
  
      if (!selectedFile) {
        setErrorMsg("Please choose a file");
        setIsSuccess(false)
        return
      }
  
      const fileSizeKiloBytes = selectedFile.size / 1024
  
      if(fileSizeKiloBytes < MIN_FILE_SIZE){
        setErrorMsg("File size is less than minimum limit");
        setIsSuccess(false)
        return
      }
      if(fileSizeKiloBytes > MAX_FILE_SIZE){
        setErrorMsg("File size is greater than maximum limit");
        setIsSuccess(false)
        return
      }
  
      setErrorMsg("")
      setIsSuccess(true)
    };
  
  return (
    <div className="new">
     
      <div className="newContainer">
       
        <div className="box-mainN">
        <div class="box1">
   <div className="box-body1">
       <p className='header-new1'>Add New Student</p>
        <>
        <form onSubmit={handleSubmit}>
          <Form>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Session of Entry</InputGroup.Text>

      <Form.Select onChange={handleSessionSelect}>
      <option>Select Current Session</option>
      {data1.map((item, index) => (
        <option key={index} value={item.id}>
        {item.session_name}
        </option>
))}
    </Form.Select>
     
      </InputGroup>
      <br/>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Surname</InputGroup.Text>
        <Form.Control
          placeholder="Surname"
          aria-label="Surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
        <Form.Control
          placeholder="First Name"
          aria-label="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Other Name</InputGroup.Text>
        <Form.Control
          placeholder="Other Name"
          aria-label="Other Name"
          value={othername}
          onChange={e => setOtherName(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
       
      <Form.Select value={gender} onChange={handleGenderChange}>
      <option>select gender</option>
      <option value="male">Male</option>
        <option value="female" >Female</option>
        

    </Form.Select>
     
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Class Name</InputGroup.Text>
       
      <Form.Select onChange={handleClassSelect}>
      <option>select Class</option>
      {data2.map((item, index) => (
        <option key={index} value={item.id}>
        {item.name}
        </option>
))}
    </Form.Select>
      </InputGroup>
     
     
   
    </Form>
    <button type="submit" id="submitBtn" className="submitBtn">Save</button>
      
  </form>
        
        </>
            
</div>
</div>


<div class="box2">
   <div className="box-body2">
   <span className='header-new'>Upload Student Passport</span>
    <p className="passport-info">
      Select student passport in .jpg format of not more than 32KB, The passport should be named with the student reg number E.g RSA21001.jpg
    </p>
    
   <div className='form-input'>


   <input type="file" name="file" onChange={handleFileChange} accept="image/png, image/jpg,  image/jpeg" />
   
          {isSuccess ? <p className="success-message">Validation successful</p> : null}
          <p className="error-message">{errorMsg}</p>
		
   </div>

   <div>
				<button className='button-upload' onClick={validateSelectedFile}>Upload</button>
			</div>
   </div>
</div>

        </div>
        

        
       
      </div>
    </div>
  );
};

export default New;
