import React from 'react'
import "./testimonialTable.scss";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


const products = [
  { id: 1, RegNo: "RSA2301", Session: "2022/2023", Term:"First Term", Comment: "Hello world", Date: "2022-12-14 11:09"},
  
  
 
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
    text: "Reg No",
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
    dataField: "Comment",
    text: "Comment",
    sort: true,
    
  },
  {
    dataField: "Date",
    text: "Date",
    sort: true,
    
  },
   
  
];

const Testimonialtable = () => {
  return (
    <div className="box-mainTt">
    <div class="box-tt">
<div className="box-bodyTt">
    <div className='header-newTt'>
<p className='reg'>Comment history for RSA2301</p>

    </div>


  <div className="testimonialTable">
  
  <ToolkitProvider
  keyField="id"
  data={[]}
  columns={ columns }
  
  search
  exportCSV
>
  {
    props => (
      <div>
       
        <BootstrapTable 
        noDataIndication="No comment has been added"
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

export default Testimonialtable
