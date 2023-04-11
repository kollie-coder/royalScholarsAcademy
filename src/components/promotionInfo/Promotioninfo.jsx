import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./promotionInfo.scss"; 
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
  { id: 1, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 2, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 3, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 4, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 5, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 6, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 7, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 8, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 9, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 10, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 11, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 12, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 13, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 14, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 15, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 16, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 17, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 18, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 19, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 20, RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
  { id: 21, RegNo: "RSA2222", StudentName: "OWOLABI KOLAWOLE", CurrentClass: "PLAYGROUP", Gender: "M", SessionEntry: "2022/2023"},
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
        <button
        className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
        View Profile
      </button>
      </>
      );
    },
  },
  
  
  
];


const Promotioninfo = () => {
  return (
    <div className="box-mainprt">
    <div class="box-prt">
<div className="box-bodyPrt">
<p className='header-newPrt'>Promotion Exercise</p>

  <div className="promotionTable">

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
  )
}

export default Promotioninfo