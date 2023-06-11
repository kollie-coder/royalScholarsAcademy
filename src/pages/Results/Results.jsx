import React, { useState, useEffect } from 'react';
import "./Results.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Resultinfo from '../../components/resultInfo/Resultinfo';
import { InputGroup, Button } from 'react-bootstrap';

const Results = () => {
  const [selected, setSelected] = useState('');
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  
  const [selectedId, setSelectedId] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  const [selectedSession, setSelectedSession] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTerm,  setSelectTerm] = useState('');
  const [id, setId] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const [originalData, setOriginalData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);


  

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
    axios.get('http://francisop.pythonanywhere.com/school/term/')
      .then(response => {
        setData2(response.data);
        console.log(data2);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  



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
  };

  const fetchData = async () => {
    if (!selectedId) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get(`https://francisop.pythonanywhere.com/school/filter/${selectedId}`);
      setData3(response.data);
      setSelectedData(response.data[1])
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };




  function handleSessionSelect(event) {
    setSelectedSession(event.target.value);
  }

   function handleTermSelect(event) {
    setSelectTerm(event.target.value);
  }

  function handleClassSelect(event) {
    setSelectedClass(event.target.value);
  }

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="new">
       
      <div className="newContainer">
       
       
        <div className="box-main-re">
        <div class="box-re">
   <div className="box-body-re">
   <h1 className='header-re'>Upload Class Result</h1>
   
   <div>
    <Form>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Select Current Session</InputGroup.Text>

      <Form.Select onChange={handleSessionSelect}>
      <option>Select Current Session</option>
      {data1.map((item, index) => (
        <option key={index} value={item.id}>
        {item.session_name}
        </option>
))}
    </Form.Select>
     
    </InputGroup>
      
      <br />
      

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Select Term</InputGroup.Text>

      <Form.Select onChange={handleTermSelect}>
      <option>Select Current Session</option>
      {data2.map((item, index) => (
        <option key={index} value={item.id}>
        {item.term_name}
        </option>
))}
    </Form.Select>
     
    </InputGroup>
      <br />
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Select Current Class</InputGroup.Text>

      <Form.Select value={selectedId} onChange={handleSelectChange} onClick={fetchData}>
      <option>Select Current Session</option>
      {dropdownOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        

    </Form.Select>
     
    </InputGroup>
      
      
   <br />
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
   {true && (
        <Form.Control as="textarea" aria-label="With textarea" style={{height:"13rem"}} value={data3.map((item) => item.username).toString().replace(',', '\n')} placeholder="Remark" />
        )}
        </Form.Group>

        
        
    </Form>

   
   
      </div>
   
 
</div>
</div>


<div class="box-re2">
   <div className="box-body-re2">

   <h1 className='header-re'>Upload Class Result</h1>
   <div className='result-guide'>
          <p>Select Result Prepared in PDF format </p>
        
        </div>

        <Form.Group controlId="formFileLg" className="mb-3">
        
        <Form.Control type="file" multiple accept="application/pdf, application/vnd.ms-excel"  />
      </Form.Group>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Upload Result</button>
                   </div>
			</div>
   </div>
</div>
 </div>
               
      </div>
      <div className='resultInfoContainer'>
       <Resultinfo />
    </div>
    </div>

    
    </div>
  )
}

export default Results

