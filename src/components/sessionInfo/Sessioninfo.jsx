import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import "./sessionInfo.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
  { id: 1, SessionName: "2014/2015", Status:"Not Active"},
  { id: 2, SessionName: "2015/2016", Status:"Not Active"},
  { id: 3, SessionName: "2016/2017", Status:"Not Active"},
  { id: 4, SessionName: "2017/2018", Status:"Not Active"},
  { id: 5, SessionName: "2018/2019", Status:"Not Active"},
  { id: 6, SessionName: "2019/2020", Status:"Not Active"},
  { id: 7, SessionName: "2020/2021", Status:"Not Active"},
  { id: 8, SessionName: "2021/2022", Status:"Not Active"},
  { id: 9, SessionName: "2022/2023", Status:"Not Active"},
  { id: 10, SessionName: "2023/2024", Status:"Not Active"},
  { id: 11, SessionName: "2024/2025", Status:"Not Active"},
 
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
    dataField: "SessionName",
    text: "Session Name",
    sort: true
  },
  {
    dataField: "Status",
    text: "Status",
    sort: true
  },
  
  
  {
    dataField: "action",
    text: "Action",
    formatter: (cellContent, row) => {
      return (
        <>
        <button
        className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
        Activate
      </button>
      </>
      );
    },
  },
  
  
  
];



const Sessioninfo = () => {
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
  data={ products }
  columns={ columns }
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

      {/*<Table striped>  
  <thead>  
    <tr>  
      <th>#</th>  
      <th>Session Name</th>  
      <th>Status</th>  
      <th>Action</th>  
    </tr>  
  </thead>  
  <tbody>  
    <tr>  
      <td style={{color:"red"}}>1</td>  
      <td style={{color:"red"}}>2014/2015</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Activate</td>  
    </tr>  
    <tr>  
      <td style={{color:"red"}}>2</td>  
      <td style={{color:"red"}}>2015/2016</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Activate</td>  
    </tr>  
    <tr>  
      <td style={{color:"red"}}>3</td>  
      <td style={{color:"red"}}>2016/2017</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Active</td>  
    </tr>  
    <tr>  
      <td style={{color:"red"}}>4</td>  
      <td style={{color:"red"}}>2017/2018</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Activate</td>  
    </tr>  
    <tr>  
      <td style={{color:"red"}}>5</td>  
      <td style={{color:"red"}}>2021/2022</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Activate</td>  
    </tr>  
    <tr>  
      <td style={{color:"red"}}>6</td>  
      <td style={{color:"red"}}>2022/2023</td>  
      <td style={{color:"red"}}>Active</td>  
      <td style={{color:"blue"}}>Deactivate</td>  
    </tr> 
    <tr>  
      <td style={{color:"red"}}>7</td>  
      <td style={{color:"red"}}>2023/2024</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Activate</td>  
    </tr>  
  </tbody>  
</Table>  */}
  
      </div>
   
   
</div>
</div>


<div class="box-seIn2">
   <div className="box-bodySe2">
   <p className='header-newSeIn'>Add Term</p>
   <div className="Table2">
      <Table striped>  
  <thead>  
    <tr>  
      <th>#</th>  
      <th>Term Name</th>  
      <th>Status</th>  
      <th>Action</th>  
    </tr>  
  </thead>  
  <tbody>  
    <tr>  
      <td style={{color:"red"}}>1</td>  
      <td style={{color:"red"}}>First Term</td>  
      <td style={{color:"red"}}>Not Active</td>  
      <td style={{color:"blue"}}>Activate</td>  
    </tr>  
    <tr>  
      <td>2</td>  
      <td>Second Term</td>  
      <td>Active</td>  
      <td>Deactivate</td>  
    </tr>  
    <tr>  
    <td>3</td>  
      <td>Third Term</td>  
      <td>Not Active</td>  
      <td>Activate</td>  
    </tr>  
  </tbody>  
</Table>  
  
      </div>
   </div>
</div>
 </div>
               
      </div>
      </div>
 
  )
}

export default Sessioninfo






  
    

   

