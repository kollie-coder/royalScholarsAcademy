import React from 'react'
import "./studentNavbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../../context/darkModeContext";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Logo from '../../../assets/logo.jpg'
import { useContext } from "react";

const StudentNabvar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="studentNavbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>
      <div className="items">
        <div className="item">
          <EmailIcon className="icon" />
          Message
          <KeyboardArrowDownOutlinedIcon className="arrow" />
        </div>
        <div className="item">
          <NotificationsIcon className="icon" />
          Notification
          <KeyboardArrowDownOutlinedIcon className="arrow" />
        </div>
        <div className="item">
          <img
            src= {Logo}
            alt=""
            className="avatar"
          />
          Student
          <KeyboardArrowDownOutlinedIcon className="arrow" />
        </div>
        <div className="item">
          <DarkModeOutlinedIcon
            onClick={() => dispatch({ type: "TOGGLE" })}
          />
        </div>
        
      </div>
    </div>
  </div>
);
};
 

export default StudentNabvar

