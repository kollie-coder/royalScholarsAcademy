import React, { useState } from 'react';
import "./dashInfo.scss";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
  { RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2020/2021", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2022/2023", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2022/2023", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2022/2023", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2022/2023", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2021/2022", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2021/2022", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2021/2022", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2021/2022", Term: "First Term"},
  {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2021/2022", Term: "First Term"},
  {RegNo: "RSA2233", StudentName: "KOLA SAMUEL", Class: "PRIMARY -2", Session: "2021/2022", Term: "First Term"},
  {RegNo: "RSA2373", StudentName: "KOLA SAMUEL", Class: "PRIMARY -1", Session: "2021/2022", Term: "First Term"},
 
];
const columns = [
 
  
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
        className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
        View
      </button>
      </>
      );
    },
  },
  
  
  
];


      

const Dashinfo = ()  => {

   

          
  return (
    <div className="box-mainDi">
    <div class="box-di">
<div className="box-bodyDi">
<p className='header-newDi'>Recent Result</p>

  <div className="dashboardTable">
  <ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  
  search
>
  {
    props => (
      <div>
        <SearchBar 
        { ...props.searchProps } />
        <hr />
        <BootstrapTable 
        keyField='id'
        pagination={ paginationFactory() }
        striped
        hover
        { ...props.baseProps } 
        
        />
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

export default Dashinfo