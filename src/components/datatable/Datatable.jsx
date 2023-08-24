import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./datatable.scss";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from 'react-router-dom'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Button, Modal } from 'react-bootstrap';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;

const Datatable = () => {
  const [data, setData] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      
      const response = await axios.get('https://francisop.pythonanywhere.com/students/', {
        
      headers: {
          'Content-Type': 'application/json',
         'Authorization': 'token b9e7fe8a82d7088303a465b07bab1ccfa9927846',
        }    
      });
      
      const data = response.data;

      const merged = data.map((item) => {
        const mergedName = `${item.last_name} ${item.first_name}`;

        return {
          ...item,
          fullName: mergedName,
        };
      });
      
      setMergedData(merged);
      console.log(data)
     
    } catch (error) {
      console.error(error);
    }
  };


  const handleDeleteClick = async (row) => {
    try {
    
      // Make the delete request to the API with the authorization header
      const response = await fetch(`https://francisop.pythonanywhere.com/students/${row.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'token b9e7fe8a82d7088303a465b07bab1ccfa9927846',
        },
      });
  
      if (response.ok) {
        // If the delete request is successful, update the data state by removing the deleted row
        setData((prevData) => prevData.filter((dataRow) => dataRow.id !== row.id));
      } else {
        console.error('Delete request failed with status:', response.status);
      }
      
    } catch (error) {
      console.error('Error deleting row:', error);
    }

  };



  const handleViewClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
    setShowModal(false);
  };

  

  const products = [
    { id: 1, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
   
  ];
  const columns = [
    {
      dataField: "id",
      text: "#",
      headerStyle: (colum, colIndex) => {
     return { width: "50px", textAlign: "center" };
    }
  },
  
    
    {
      dataField: "matric",
      text: "Reg. No",
      sort: true
    },
    {
      dataField: "fullName",
      text: "Student Name",
      sort: true
    },
    {
      dataField: "class_name",
      text: "Current Class",
      sort: true
    },
    {
      dataField: "gender",
      text: "Gender",
      sort: true
    },
    {
      dataField: "session_name",
      text: "Session Entry",
      sort: true,
      
    },
    
    {
      dataField: "action",
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
          <button style={{color:'blue', padding: '5px', marginRight:"5px", backgroundColor:"white", border:'none'}}
           onClick={() => handleViewClick(row)}
          >
            View
          </button>
        
          <button
          className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}}
          onClick={() => handleDeleteClick(row)}
          >
          Delete
        </button>
        </>
        );
      },
    },
    
    
    
  ];
  
      
  return (
    <div className="box-mainSr">
    <div class="box-sr">
<div className="box-bodySr">
<p className='header-newSr'>Student Record</p>

  <div className="studentTable">
  
  <ToolkitProvider
  keyField="id"
  data={ mergedData }
  columns={ columns }
  cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
  noDataIndication="No data available"
  search
  exportCSV
>
  {
    props => (
      <div>
        <ExportCSVButton{ ...props.csvProps }
        style={{color:"white", backgroundColor:"gray", padding:"5px"}}
        >Export CSV!!</ExportCSVButton>
        <hr />
       
        <SearchBar 
        { ...props.searchProps } />
        <hr />
        <BootstrapTable 
        pagination={ paginationFactory() }
        striped
        hover
        { ...props.baseProps } />
      </div>
    )
  }
</ToolkitProvider>


{selectedRow && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Student Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <strong>Registration Number: </strong>
              {selectedRow.matric}
            </div>
            <div>
              <strong>Full Name: </strong>
              {selectedRow.fullName}
            </div>
            <div>
              <strong>Gender: </strong>
              {selectedRow.gender}
            </div>
            <div>
              <strong>Session Entry: </strong>
              {selectedRow.session_name}
            </div>
            <div>
              <strong>Current Class: </strong>
              {selectedRow.class_name}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
  </div>


</div>
</div>
</div>
  );
};

export default Datatable;
