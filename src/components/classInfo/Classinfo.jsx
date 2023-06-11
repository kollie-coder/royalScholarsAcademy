import {React, useEffect, useState} from 'react'
import "./classInfo.scss";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Modal, Button, Form } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FaRegEdit } from 'react-icons/fa';




const Classinfo = ({ id }) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [updatedData, setUpdatedData] = useState([]);
  const [formData, setFormData] = useState({
    
   
    first_name: '',
    last_name: '',
    other_name: '',
    title: '',
    
    
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://francisop.pythonanywhere.com/school/class/");
         setData1(response1.data);
         console.log(data1);
        const response2 = await axios.get("http://francisop.pythonanywhere.com/school/teacher/");
        setData2(response2.data);
        console.log(data2);

        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    }, []);
   
    const combineData = () => {
      // Combine the data from data1 and data2 as needed
      // Return the combined data array
      
      //return [...data1, ...data2];

      return data1.map((item1) => {
        const matchingItem2 = data2.find((item2) => item2.id === item1.id);
       
        if (matchingItem2) {
          const fullName = `${matchingItem2.title} ${matchingItem2.first_name} ${matchingItem2.last_name}`;
          
          // Return the combined object with properties from both datasets
          return {
            id: item1.id,
            name: item1.name,
            numberOfStudent: item1.number_of_students,
            fullName: fullName,
            
            // Add more properties as needed
          };
        }
        
  
        return null; // Skip the items without a match in data2
      }).filter((combinedItem) => combinedItem !== null);
    

    };


    const handleButtonClick = (row) => {
      setSelectedRow(row);
      setFormData({
       
       
         first_name: row.first_name,
         last_name: row.last_name,
         other_name: row.other_name,
         title: row.title
       
      });
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
       
        [e.target.name]: e.target.value,
        
      });
    };
  
    const handleSaveChanges = async () => {
      try {
        // Make the PUT request to the API using the selected row's data
        const response = await fetch(`http://francisop.pythonanywhere.com/school/teacher/${selectedRow.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Update the table data with the updated row
          const updatedData = await response.json();
          setUpdatedData(updatedData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  
      handleCloseModal();
    };
  

  const columns = [
    {
      dataField: "id",
      text: "#",
      headerStyle: (colum, colIndex) => {
     return { width: "50px", textAlign: "center" };
    }
  },
  
    
    {
      dataField: "name",
      text: "Class Name",
      sort: true
    },
    {
      dataField: "fullName",
      text: "Teacher's Name",
      headerStyle: (colum, colIndex) => {
        return { width: "400px", textAlign: "center" };
       },
      sort: true
    },
    {
      dataField: "numberOfStudent",
      text: "Number of Students in Class",
      sort: true
    },
    
    {
      dataField: "action",
      text: "Action",
      headerStyle: (colum, colIndex) => {
        return { width: "100px", textAlign: "center" };
       },
      formatter: (cellContent, row) => {
        return (
          <>
          <button onClick={() => handleButtonClick(row)}
          className="" style={{color:'red', padding: '5px',color:'blue', border:'none'}} >
            <FaRegEdit/>
        </button>
        </>
        );
      },
    },
    
    
    
  ];


   const combinedData =combineData();

   
    
    
    return (
      
      <div className="box-mainCli">
    <div class="box-cli">
<div className="box-bodyCli">
<p className='header-newCli'>Class Information</p>

  <div className="classTable">
  
  <ToolkitProvider
  keyField="id"
  data={  updatedData.length > 0 ? updatedData : combinedData }
  columns={ columns }
  search
  exportCSV
>
  {
    props => (
      <div>
        
        <BootstrapTable 
        pagination={ paginationFactory() }
        striped
        hover
        { ...props.baseProps } />
      </div>
    )
  }
</ToolkitProvider>

  </div>

  <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        
            <Form.Group controlId="title">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="otherName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="other_name"
                value={formData.other_name}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
</div>
</div>
</div>
    );
  };

export default Classinfo;





