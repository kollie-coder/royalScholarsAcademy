import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import "./resultTableEx.scss";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;


const Resulttable = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
    const {id} = useParams()
    console.log(id);

   useEffect(()=> {
      axios.get(`https://francisop.pythonanywhere.com/school/filter/result/${id}`)
      .then(response => {
        console.log(response.data);
        setData2(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }, [])

    

    const products = [
        { id: 1, name: "PLAYGROUP", regNo:"RSA2301", studentName:"Kolawole Ade", sessionTerm: "2022/2023/First Term", dateUploaded:"2022-12-14 11:13"},
        
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
          dataField: "class_name",
          text: "Class",
          sort: true
        },
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
          dataField: "sessionTerm",
          text: "Session/Term",
          sort: true,
          
        },
        {
            dataField: "dateUploaded",
            text: "Date Uploaded",
            sort: true
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
              onClick={(e) => window.location.href = row.doc}
              className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
              View Result
            </button>
            </>
            );
          },
        },
        
        
        
      ];

      const sessionTerm = (cell, row) => {
        return `${row.session_name}/ ${row.term_name}`;
      };
      const dateUploaded = (cell, row) => {
        return new Date(row.created_at).toLocaleString();
      };
    
      // Apply the formatter to the 'fullName' column
      columns[4].formatter = sessionTerm;

      columns[5].formatter = dateUploaded;

      //const combinedData =combineData();
  return (

    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="new">
       

    <ToolkitProvider
  keyField="id"
  data={data2 }
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
  )
}

export default Resulttable