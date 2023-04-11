import React from 'react'
import "./datatable.scss";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
  { id: 1, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 2, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 3, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 4, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 5, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 6, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 7, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 8, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 9, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 10, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 11, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 12, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 13, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 14, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 15, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 16, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 17, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 18, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 19, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 20, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
  { id: 21, RegNo: "RSA2222", StudentName: "OWOLABI KOLAWOLE", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023", Action: "Edit" },
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
    dataField: "RegNo",
    text: "Reg. No",
    sort: true
  },
  {
    dataField: "StudentName",
    text: "Student Name",
    sort: true
  },
  {
    dataField: "CurrentClass",
    text: "Current Class",
    sort: true
  },
  {
    dataField: "Gender",
    text: "Gender",
    sort: true
  },
  {
    dataField: "SessionEntry",
    text: "Session Entry",
    sort: true,
    
  },
  
  {
    dataField: "action",
    text: "Action",
    formatter: (cellContent, row) => {
      return (
        <>
        <button style={{color:'blue', padding: '5px', marginRight:"5px", backgroundColor:"white", border:'none'}}>
          View
        </button>
      
        <button
        className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
        Delete
      </button>
      </>
      );
    },
  },
  
  
  
];
const Datatable = () => {
  
      
  return (
    <div className="box-mainSr">
    <div class="box-sr">
<div className="box-bodySr">
<p className='header-newSr'>Student Record</p>

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

  </div>


</div>
</div>
</div>
  );
};

export default Datatable;
