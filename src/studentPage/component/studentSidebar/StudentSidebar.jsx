import React from 'react'
import "./studentSidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { FaHome } from "react-icons/fa";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

const StudentSidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="studentSidebar">
      <div className="top">
        <li>
        
           <FaHome className="icon" />
            <span>RESULT PORTAL</span> 
        </li>
      </div>
      <div className="center">
        <div className="middle-img">
          <img src={Logo} alt="" className="logo"/>

        </div>
        <div className="info">
            <span className="school-name">ROYAL SCHOLARS ACADEMY</span>
            <span className="admin">Student</span> 
        </div>
      </div>
      
      <div className="bottom">
        <ul>
          <Link to="/studentDash" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          

          <Link to="/studentTestimony" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Testimony</span>
            </li>
          </Link>
         
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
     
    </div>
  )
}

export default StudentSidebar
