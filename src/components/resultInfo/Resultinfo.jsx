import React, {useEffect, useState} from 'react'
import "./resultInfo.scss";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useNavigate } from 'react-router-dom';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;



const Resultinfo = () => {
  const navigate = useNavigate()
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://francisop.pythonanywhere.com/school/class/");
        setData1(response1.data);
        console.log(data1);
        const response2 = await axios.get("http://francisop.pythonanywhere.com/school/result/");
        setData2(response2.data);
        console.log(data2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    }, []);



    const combineData = () => {
      // Combine the data from data1 and data2 as needed
      return data1.map((item1) => {
        const matchingItem2 = data2.find((item2) => item2.id === item1.id);
       
        if (matchingItem2) {
          const sessionTerm = `${matchingItem2.session_name}/${matchingItem2.term_name}`;
          const createdAtString = new Date(matchingItem2.created_at).toLocaleString();
          // Return the combined object with properties from both datasets
          return {
            id: item1.id,
            name: item1.name, 
            numberOfStudent: item1.number_of_students,
            dateUploaded: createdAtString,

            sessionTerm: sessionTerm,
          };
        }
        
  
        return null; // Skip the items without a match in data2
      }).filter((combinedItem) => combinedItem !== null);
    

    };

    

   
    const handleViewStudents = async (row) => {
      try {
        const response3 = await axios.get(`https://francisop.pythonanywhere.com/school/filter/result/${row.id}`);
        setData1(response3.data);
        //console.log(data3);
        const response4 = await axios.get(`https://francisop.pythonanywhere.com/school/filter/${row.id}`);
        setData2(response4.data);
       // console.log(data4);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    //handleViewStudents();
    
    

    

    const combineData1 = () => {
      
      // Combine the data from data1 and data2 as needed
      return data3.map((item3) => {
        const matchingItem4 = data4.find((item4) => item4.id === item3.id);
       
        if (matchingItem4) {
          const fullName = `${matchingItem4.last_name} ${matchingItem4.first_name}`;
          const sessionTerm = `${matchingItem4.session_name}/${matchingItem4.term_name}`;
          const createdAtString = new Date(matchingItem4.start_date).toLocaleString();
        
          // Return the combined object with properties from both datasets
          return {
            id: item3.id,
            matric: matchingItem4.matric, 
            class: matchingItem4.class_name, 
            fullName: fullName,
            dateUploaded: createdAtString,
            sessionTerm: sessionTerm,


          };
        }
        
  
        return null; // Skip the items without a match in data2
      }).filter((combinedItem) => combinedItem !== null);
    
    
    };


 
  const products = [
    { id: 1, Class: "PLAYGROUP", NumStudent:"12", NumUploadedResult:"12", DateUploaded:"2022-12-14 11:13",SessionTerm: "2022/2023/First Term"},
    
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
      dataField: "name",
      text: "Class",
      sort: true
    },
    {
      dataField: "numberOfStudent",
      text: "Num (Students)",
      sort: true
    },
    {
      dataField: "NumUploadedResult",
      text: "Num (Result Uploaded)",
      sort: true
    },
    {
      dataField: "dateUploaded",
      text: "Date Uploaded",
      sort: true
    },
    {
      dataField: "sessionTerm",
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
          onClick={() => navigate(`/results/${row.id}`)}
          
          className="" style={{color:'red', padding: '5px', backgroundColor:"white", border:'none'}} >
          View Result
        </button>
        </>
        );
      },
    },
    
    
    
  ];

  const combinedData =combineData();

  const combinedData1 =combineData1();
  
  return (
    <div className="box-mainRe">
    <div class="box-re">
<div className="box-bodyRe">
<p className='header-newRe'>Result Upload Status</p>

  <div className="resultTable">
 <ToolkitProvider
  keyField="id"
  data={ combinedData }
  columns={ columns }
  search
  exportCSV
  wrapperClasses="table-responsive"
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

export default Resultinfo