import React from 'react'
import "./classInfo.scss";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FaRegEdit } from 'react-icons/fa';

const products = [
  { id: 1, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
  { id: 2, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
  { id: 3, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
  { id: 4, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
   { id: 5, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
    { id: 6, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
     { id: 7, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
      { id: 8, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
       { id: 9, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
        { id: 10, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
         { id: 11, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
          { id: 12, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
           { id: 13, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
            { id: 14, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
             { id: 15, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
              { id: 16, ClassName: "PLAYGROUP", TeacherName:"Mr Akingbade Olarenwaju", NumberOfStudent:"12"},
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
    dataField: "ClassName",
    text: "Class Name",
    sort: true
  },
  {
    dataField: "TeacherName",
    text: "Teacher's Name",
    headerStyle: (colum, colIndex) => {
      return { width: "400px", textAlign: "center" };
     },
    sort: true
  },
  {
    dataField: "NumberOfStudent",
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
        <button
        className="" style={{color:'red', padding: '5px',color:'blue', border:'none'}} >
          <FaRegEdit/>
      </button>
      </>
      );
    },
  },
  
  
  
];



const Classinfo = () => {
    
    return (
      <div className="box-mainprt">
    <div class="box-prt">
<div className="box-bodyPrt">
<p className='header-newPrt'>Class Information</p>

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

export default Classinfo;





