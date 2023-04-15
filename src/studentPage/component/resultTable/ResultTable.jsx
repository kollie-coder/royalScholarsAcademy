import React from 'react'
import "./resultTable.scss";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
  { id: 1, Class: "PLAYGROUP", Session: "2022/2023", Term:"First Term", dateUploaded: "2022-12-14 11:09", Action: "View" },
  { id: 2, Class: "PLAYGROUP", Session: "2022/2023", Term:"Second Term", dateUploaded: "2023-04-04 11:09", Action: "View" },
  
 
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
    dataField: "Class",
    text: "Class",
    sort: true
  },
  
  {
    dataField: "Session",
    text: "Session",
    sort: true,
    
  },
  {
    dataField: "Term",
    text: "Term",
    sort: true,
    
  },
  {
    dataField: "dateUploaded",
    text: "Date Uploaded",
    sort: true,
    
  },
  
  {
    dataField: "action",
    text: "Action",
    formatter: (cellContent, row) => {
      return (
        <>
        <button style={{color:'blue', padding: '5px', marginRight:"5px", backgroundColor:"white", border:'none'}}>
          View Result
        </button>
      
      </>
      );
    },
  },
  
  
  
];

const ResultTable = () => {
  return (
    <div className="box-mainRt">
    <div class="box-rt">
<div className="box-bodyRt">
    <div className='header-newRt'>
<p className='reg'>Result history for RSA2301</p>
<p className='Studentname'>STUDENT NAME: OWOLABI SAMUEL</p>
    </div>


  <div className="studentTable">
  
  <ToolkitProvider
  keyField="id"
  data={ products }
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


</div>
</div>
</div>
  );
};

export default ResultTable
