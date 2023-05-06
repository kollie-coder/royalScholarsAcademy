import React, { useState } from 'react';
import StudentNabvar from '../../component/studentNavbar/StudentNabvar';
import StudentSidebar from '../../component/studentSidebar/StudentSidebar';
import ResultTable from '../../component/resultTable/ResultTable';
import "./studentDashboard.scss";
import Widget from "../../component/widget/Widget";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

const StudentDashboardd = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className="studentDashboard">
      <StudentSidebar />
      <div className="studentDashboardContainer">
        <StudentNabvar />
        <div className="widgets">
        <Widget type="presentClass" />
        <Widget type="resultStatus" />
          <Widget type="currentSession" />
          <Widget type="currentTerm" />
        </div>

        <div className='dashInfoContainer'>
           <ResultTable/>
        </div>
        
        <div className="box-mainDa">
       


<div class="box-da1">
   <div className="box-bodyDa1">
   
   <div className='calender'>
   <h1 className='text'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
     
     </div> 
    
 

   </div>
   </div>    

   <div class="box-da2">
   <div className="box-bodyDa2">
     
   <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63396.0772899765!2d3.4532773582031213!3d6.738737100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bc3414bcab155%3A0xab6a2841981e4c66!2sRoyal%20Scholars%20Academy!5e0!3m2!1sen!2sus!4v1679920567216!5m2!1sen!2sus"
        width="100%"
        height="380"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
        </div>     
    
</div>
</div>
     </div>
     </div>
    </div>
   
  );
};
 

export default StudentDashboardd
