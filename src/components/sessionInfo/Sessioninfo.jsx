import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import "./sessionInfo.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;


const Sessioninfo = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [data1, setData1] = useState([]);
  
  
  const table1Columns = [
    {
      dataField: "id",
      text: "#",
      headerStyle: (colum, colIndex) => {
     return { width: "50px", textAlign: "center" };
    }
  },
  
    
    {
      dataField: "session_name",
      text: "Session Name",
      sort: true
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cell, row) => {
        return cell ? "Active" : "Not Active";
      },
    },
    
    
    {
      text: 'Action',
      formatter: (cellContent, row) => (
        <button onClick={() => handleButtonClick(row)} 
        style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}}
        >
          {row.status ? "Deactivate" : "Activate"}
        </button>
      )
    }
    
    
    
  ];



  const table1Columns2 = [
    {
      dataField: "id",
      text: "#",
      headerStyle: (colum, colIndex) => {
     return { width: "50px", textAlign: "center" };
    }
  },
  
    
    {
      dataField: "term_name",
      text: "Term Name",
      sort: true
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cell, row) => {
        return cell ? "Active" : "Not Active";
      },
    },
    
    
    {
      text: 'Action',
      formatter: (cellContent, row) => (
        <button onClick={() => handleButtonClick1(row)} 
        style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}}
        >
          {row.status ? "Deactivate" : "Activate"}
        </button>
      )
    }
    
    
    
  ];

  

useEffect(() => {
  
   axios.get("http://francisop.pythonanywhere.com/school/session/")
   
  .then(response => {
    setData(response.data);
     
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}, []);

const handleButtonClick = (row) => {
  const newStatus = !row.status;
  fetch(`http://francisop.pythonanywhere.com/school/session/${row.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: newStatus, session_name: row.session_name })
  })
  .then((response) => {
    if (response.ok) {
      setStatus(newStatus);
    } else {
      throw new Error("Network response was not ok.");
    }
  })
  .catch((error) => {
    console.error("There was an error updating the data:", error);
    setStatus(row.status);
  });
};

useEffect(() => {
  axios.get('http://francisop.pythonanywhere.com/school/term/')
    .then(response => {
      setData1(response.data);
      console.log(data1);
    })
    .catch(error => {
      console.log(error);
    });
}, []);


const handleButtonClick1 = (row) => {
  const newStatus1 = !row.status;
  fetch(`http://francisop.pythonanywhere.com/school/term/${row.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: newStatus1, term_name: row.term_name })
  })
  .then((response) => {
    if (response.ok) {
      setStatus(newStatus1);
    } else {
      throw new Error("Network response was not ok.");
    }
      
  })
  .catch((error) => {
    console.error("There was an error updating the data:", error);
    setStatus(row.status);
  });
};

  return (
    <div className="new">
       
      <div className="newContainer">

       
        <div className="box-mainSeIn">
        <div class="box-seIn">
   <div className="box-bodySeIn">
   <p className='header-newSeIn'>Session</p>
  
      <div className="Table1">
      <ToolkitProvider
  keyField="id"
  data={ data }
  columns={ table1Columns }
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

</div>
</div>


<div class="box-seIn2">
   <div className="box-bodySe2">
   <p className='header-newSeIn'>Add Term</p>
   <div className="Table2">
   <ToolkitProvider
  keyField="id"
  data={ data1 }
  columns={ table1Columns2 }
>
  {
    props => (
      <div>
        <BootstrapTable 
        striped
        hover
        { ...props.baseProps } />
      </div>
    )
  }
</ToolkitProvider>
  
  
      </div>
   </div>
</div>
 </div>
               
      </div>
      </div>
 
  )
}

export default Sessioninfo






  
    

   

