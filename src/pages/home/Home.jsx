import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Dashinfo from '../../components/dashInfo/Dashinfo';
import "./home.scss";
import Widget from "../../components/widget/Widget";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Widget type="totalStudents" />
        <Widget type="uploadedResults" />
          <Widget type="currentSession" />
          <Widget type="currentTerm" />
        </div>

        <div className='dashInfoContainer'>
          <Dashinfo />
        </div>
        
        <div className="box-mainDa">
        <div class="box-da">
   <div className="box-bodyDa">
     
   <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://images.pexels.com/photos/15910048/pexels-photo-15910048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="https://images.pexels.com/photos/15910048/pexels-photo-15910048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="https://images.pexels.com/photos/15910048/pexels-photo-15910048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
       
      
    
</div>
</div>


<div class="box-da2">
   <div className="box-bodyDa2">
   
   <div className='calender'>
   <h1 className='text'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
     
     </div> 
    
 

   </div>
   </div>    

   <div class="box-da3">
   <div className="box-bodyDa3">
     
   <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63396.0772899765!2d3.4532773582031213!3d6.738737100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bc3414bcab155%3A0xab6a2841981e4c66!2sRoyal%20Scholars%20Academy!5e0!3m2!1sen!2sus!4v1679920567216!5m2!1sen!2sus"
        width="100%"
        height="350"
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

export default Home;
