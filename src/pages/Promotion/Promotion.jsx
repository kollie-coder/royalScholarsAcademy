import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Promotion.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Promotioninfo from '../../components/promotionInfo/Promotioninfo';



const Promotion = () => {
 
  const [selected, setSelected] = useState('');
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  
  const [sessionData, setSessionData] = useState({ term: "", session: "" });

  
  const [selectedId, setSelectedId] = useState('');
   const [selectedStudentId, setSelectedStudentId] = useState('');
  
   const [dropdownOptions, setDropdownOptions] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
 
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedNewClass, setSelectedNewClass] = useState('');
  const [id, setId] = useState('');
  const [selectedData, setSelectedData] = useState(null);

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };



  useEffect(() => {
    fetchDropdownOptions();
  }, []);

  const fetchDropdownOptions = async () => {
    try {
      const response = await axios.get('http://francisop.pythonanywhere.com/school/class/');
      setDropdownOptions(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedId(value);
    setSelectedClass(e.target.value);
    
  };

  const fetchData = async () => {
    if (!selectedId) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get(`https://francisop.pythonanywhere.com/school/filter/${selectedId}`);
      console.log(response)
      setStudents(response.data);
    
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };


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



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://francisop.pythonanywhere.com/school/active/",
          {
            params: {
              term: "term",
              session: "session",
            },
          }
        );
        const data = response.data;
        setSessionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const handlePutRequest = () => {
    const url = `https://francisop.pythonanywhere.com/school/promote/${selectedStudentId}/`;

    const data = {
     school_class: selectedNewClass,
      
    };

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response from the server
        console.log(result);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  




  function handleSelectedNewClass(event) {
    setSelectedNewClass(event.target.value);
  }


  function handleStudentSelect(event) {
    
    setSelectedStudentId(event.target.value);
  }

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="new">
       
      <div className="newContainer">
       
       
        <div className="box-main-Pr">
        <div class="box-pr">
   <div className="box-body-pr">
   <h1 className='header-Pr'>Student Promotion Exercise</h1>
   
   <div>
   <Form.Select>
   <option disabled selected>Select Current Session</option>
 
   <option key={sessionData.session} >
          {sessionData.session}
        </option>
  
      </Form.Select>
      <br />


      <InputGroup className="mb-3">  

      <Form.Select value={selectedId} onChange={handleSelectChange} onClick={fetchData}>
      <option>Select Current Class</option>
      {dropdownOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        

    </Form.Select>
     
    </InputGroup>
      <br />
      <Form.Select onChange={handleStudentSelect}>
        <option disabled selected>Select Student</option>
        {students.map((student) => (
        <option key={student.id} value={student.id}>
          {student.first_name}
          </option>
       ))}
      </Form.Select>
      <br />
      <InputGroup className="mb-3">
       
       

      <Form.Select onChange={handleSelectedNewClass}>
      <option>Select Class to be Promoted/Repeated</option>
      {data2.map((item, index) => (
        <option key={index} value={item.id}>
        {item.name}
        </option>
))}
    </Form.Select>
     
    </InputGroup>
   <br />
      <InputGroup>
        
        <Form.Control as="textarea" aria-label="With textarea"  placeholder="Remark" />
      </InputGroup>
      </div>
   
 <div>
   <button type="submit" id="saveBtn-pr" onClick={handlePutRequest} className="promoteBtn">Promote Student</button>
  
			</div>
</div>
</div>


<div class="box-pr2">
   <div className="box-body-pr2">
   <div className='promotion-guide'>
          <p>Kindly Enter the promotion exercise at first term of the new academic session E.g <strong>First Term of 2022/2023 session</strong></p>
        
        </div>
			</div>
   </div>
</div>
 </div>
               
      </div>
      <div className='promotionInfoContainer'>
     <Promotioninfo />
     </div>
    </div>
    </div>
   

    
    
  );

}

export default Promotion

