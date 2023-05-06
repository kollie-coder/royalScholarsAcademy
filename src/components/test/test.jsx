import React, { useEffect, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import axios   from 'axios';
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { data } from 'jquery';
const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;
const products = [
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
}


export default Test
