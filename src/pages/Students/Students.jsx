import React from 'react'
import "./Students.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import New from "../../components/new/New"

const Students = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <New />
        <div className='list-container2'>
        <Datatable/>
       </div>

        </div>
    
        
      </div>
    
  )
}

export default Students

