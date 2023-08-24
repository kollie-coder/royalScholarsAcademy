import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./dashInfo.scss";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;


    
const Dashinfo = ()  => {

  const [data1, setData1] = useState([]);

  const products = [
    {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
    {RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
    { RegNo: "RSA2301", StudentName: "OWOLABI SAMUEL", Class: "PLAYGROUP", Session: "2018/2019", Term: "First Term"},
    
  ];
  const columns = [
   
    
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
      text: "Class",
      sort: true
    },
    {
      dataField: "session_name",
      text: "Session",
      sort: true,
      
    },
    {
      dataField: "term_name",
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
              onClick={(e) => window.location.href = row.doc}
          
          className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
          View
        </button>
        </>
        );
      },
    },
    
    
    
  ];

  const fullName = (cell, row) => {
    return `${row.last_name} ${row.first_name}`;
  };

  columns[2].formatter = fullName;



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://francisop.pythonanywhere.com/school/result/");
        setData1(response1.data);
        console.log(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    }, []);
  
          
  return (
    <div className="box-mainDi">
    <div class="box-di">
<div className="box-bodyDi">
<p className='header-newDi'>Recent Result</p>

  <div className="dashboardTable">
  <ToolkitProvider
  keyField="id"
  data={ data1 }
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