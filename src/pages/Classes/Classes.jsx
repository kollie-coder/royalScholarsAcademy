import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Classes.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Classinfo from "../../components/classInfo/Classinfo";
import grey from '@material-ui/core/colors/grey';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';



const Classes = () => {

  const [inputClass, setInputClass] = useState('');
  const [inputTeacher, setInputTeacher] = useState('');
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [othername, setOtherName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');


  useEffect(() => {
    axios.get('http://francisop.pythonanywhere.com/school/class/')
      .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSelect(event) {
    setSelectedClass(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const url = 'http://francisop.pythonanywhere.com/school/teacher/';
    const data = {
      title: title,
      last_name : surname,
      first_name: firstName,
      other_name: othername,
      school_class: Number(selectedClass),
      id: Number(selectedClass),
    };

    console.log(selectedClass);

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

  
  

  // handle input change
  const handleChange1 = (e) => {
    setInputClass(e.target.value);
  };

  // handle form submission
  const handleSubmit1 = (e) => {
    console.log(inputClass);

    e.preventDefault();
    fetch('http://francisop.pythonanywhere.com/school/class/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: inputClass }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {

        console.error(err);
      });
    }
	
  
  
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
       <form onSubmit={handleSubmit}>
        <Form >
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">select Title</InputGroup.Text>
      

      <Form.Select value={title} onChange={handleTitleChange}>
      <option>select Class</option>
      <option value="mr">Mr</option>
        <option value="mrs" >Mrs</option>
        <option value="dr">Dr</option>

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
        <InputGroup.Text id="basic-addon1">Class Name</InputGroup.Text>
       

<Form.Select onChange={handleSelect}>
      <option>select Class</option>
      {data.map((item, index) => (
        <option key={index} value={item.id}>
        {item.name}
        </option>
))}
    </Form.Select>

        
      </InputGroup>
     
   
    </Form>
        
        
        
      
   <div>
       <button type="submit" id="submitBtn" className="saveBtnCl1">Save</button>
       </div>
       </form>
       </>
</div>
</div>


<div class="box-cl2">
   <div className="box-bodyCl2">
    <form onSubmit={handleSubmit1}>
   <span className='header-newCl'>Add Class</span>
    <p className="input-infoCl2">
     Class Name
    </p> 
   <input type="text" onChange={handleChange1} placeholder="Enter class name" style={{width:"24.8rem",border:`1px solid ${grey[300]}`,outline:"none",fontSize:"15px", fontWeight:"250", height:"35px", marginLeft:"15px"}} />
    <p className='input-instruct'>Kindly enter class name</p>
 <div>
   <button type="submit" id="submitBtn" className="saveBtnCl2">Save</button>
  
			</div>
      </form>
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
