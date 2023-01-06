import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DvrIcon from '@mui/icons-material/Dvr';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Inda Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2Icon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <DvrIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>

          <p className="title">USEFULS</p>

          <li>
            <PollIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>

          <p className="title">SERVICES</p>
          
          <li>
            <HealthAndSafetyIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="title">MODE</p>
        <div className="mode">
          <div className="coloroption" onClick={() => dispatch({ type: "LIGHT" })}></div>
          <div className="coloroption" onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
      </div>
    </div>
  )
}
