import React from 'react'
import "./resultInfo.scss";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
  { id: 1, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 2, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 3, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 4, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 5, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 6, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 7, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 8, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 9, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 10, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 11, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 12, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 13, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 14, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 15, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 16, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 17, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 18, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 19, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 20, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 21, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  { id: 22, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
  

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
    dataField: "NumStudent",
    text: "Num (Students)",
    sort: true
  },
  {
    dataField: "NumUploadedResult",
    text: "Num (Result Uploaded)",
    sort: true
  },
  {
    dataField: "DateUploaded",
    text: "Date Uploaded",
    sort: true
  },
  {
    dataField: "SessionTerm",
    text: "Session/Term",
    sort: true,
    
  },
  
  {
    dataField: "action",
    text: "Action",
    headerStyle: (colum, colIndex) => {
      return { width: "150px", textAlign: "center" };
     },
    formatter: (cellContent, row) => {
      return (
        <>
        <button
        className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
        View Result
      </button>
      </>
      );
    },
  },
  
  
  
];


const Resultinfo = () => {
  return (
    <div className="box-mainRe">
    <div class="box-re">
<div className="box-bodyRe">
<p className='header-newRe'>Result Upload Status</p>

  <div className="resultTable">
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



 { /*<Table striped>  
<thead>  
<tr>  
  <th>#</th>  
  <th>Class</th> 
  <th>Number of Students</th> 
  <th>Number of Result Uploaded</th> 
  <th>Date Uploaded</th> 
  <th>Session/Term</th>
  <th>Action</th>
</tr>  
</thead>  
<tbody>  
<tr>  
  <td>1</td>  
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>  
  
</tr>  
<tr>  
<td>2</td>  
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>   
</tr>  
<tr>  
<td>3</td>  
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>   
</tr>  
<tr>  
<td>4</td>  
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>  
</tr>  
<tr>  
<td>4</td>  
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>  
</tr>  
<tr>  
<td>5</td>    
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>  
</tr> 
<tr>  
<td>6</td>  
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>  
</tr>  
<tr>  
<td>7</td>   
  <td>PLAYGROUP</td> 
  <td>12</td> 
  <td>12</td> 
  <td>2022-12-13</td>  
  <td>2022/2023/First Term</td>  
  <td>
  <button className= "btnSr" type="button">View Result</button>
  
    </td>   
  
</tr>  
</tbody>  
</Table>  */}

  </div>


</div>
</div>
</div>
  )
}

export default Resultinfo