import React, { useState } from 'react';
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
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

const useStyles = makeStyles( theme => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  select: {
    height: 60,
    width: 405,
    outline: 'none',
    
    cursor: 'pointer',
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    border: "none",
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
  },
  selectdisabled: {
    color: grey[500],
  },
  menuitem: {
    direction: "rtl",
  
  },
  menuitemhidden: {
    display: "none"
  },
  textfield: {
    width: 405,
    outline: "none",
  }
})); 


	


const New = () => {
  const [selectedFile, setSelectedFile] = useState();
	

  
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


	
  const handleSubmission = () => {
	};
  const classes = useStyles();
    const [value, setValue] = useState("none");
    const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

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
        <Form>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Select Session of Entry</InputGroup.Text>
       
        <Form.Control as="select" rows={3} >
        <option disabled selected>Select Current Session</option>
        <option>2018/2019</option>
        <option>2019/2020</option>
        <option>2020/2021</option>
        <option>2021/2022</option>
        <option>2022/2023</option>
        <option>2023/2024</option>
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
        <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
       
        <Form.Control as="select" rows={3} >
        <option disabled selected>select gender</option>
        <option>Male</option>
        <option>Female</option>
       
      </Form.Control>
     
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
       

       <button type="submit" id="submitBtn" className="submitBtn">Save</button>
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
