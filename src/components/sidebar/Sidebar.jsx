import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { FaHome } from "react-icons/fa";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
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
            <span className="admin">Admin</span> 
        </div>
      </div>
      
      <div className="bottom">
        <ul>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/students-record" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Students</span>
            </li>
          </Link>
          
          <Link to="/promotion" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Promotion</span>
            </li>
          </Link>
          <Link to="/classes" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Classes</span>
            </li>
          </Link>
          <Link to="/result" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Result</span>
            </li>
          </Link>
          <Link to="/session" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Session</span>
            </li>
          </Link>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
