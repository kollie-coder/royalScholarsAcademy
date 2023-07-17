import React, { useEffect, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import axios   from 'axios';
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { data } from 'jquery';

const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;


const Test = () => {

  const [term, setTerm] = useState('');
  const [session, setSession] = useState('');
  const [currentClass, setCurrentClass] = useState('');
  const [files, setFiles] = useState([]);



  function sendData(event) {
    event.preventDefault();
    const url = 'http://francisop.pythonanywhere.com/school/result/';
  const formData = new FormData(); 
  formData.append('term', term);
  formData.append('session', session);
  formData.append('school_class', currentClass);
  formData.append('doc', files );



    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };
  
return (
<form onSubmit={sendData}>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Term" />
      <input type="text" value={session} onChange={(e) => setSession(e.target.value)} placeholder="Session" />
      <input type="text" value={currentClass} onChange={(e) => setCurrentClass(e.target.value)} placeholder="Current Class" />
      <input type="file" multiple onChange={handleFileChange} accept="application/pdf, application/vnd.ms-excel, application/zip" />

      <button type="submit">Submit</button>
    </form>







)

}






export default Test


{/*const products = [
  {
    id:"1",
    title:"3",
    body:"2"
  
  },
  
 
];
const columns = [
 
  
{
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "title",
    text: "Title",
    sort: true
  },
  {
    dataField: "description",
    text: "Description",
    sort: true
  },
  {
    dataField: "price",
    text: "Price",
    sort: true
  },
  {
    dataField: "image",
    text: "Image",
    
    formatter: (cell, row) => {
      return <img src={row.image} alt={row.name} style={{width:"50%", height:"50%"}} />;
    }
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





const Test = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  
   axios.get("https://fakestoreapi.com/products")
   
  .then(response => {
    setData(response.data);
     
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}, []);

  return (
    <div>
      <p className='header-newDi'>Recent Result</p>

<div className="dashboardTable">

 

  <ToolkitProvider
  
keyField="id"
data={data}
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

)
}*/}


