import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item"><LanguageOutlinedIcon className="icon"/> EN</div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
            <DarkModeOutlinedIcon className="icon"/>
          </div>
          <div className="item"><FullscreenExitOutlinedIcon className="icon"/></div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="count">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="count">6</div>
          </div>
          <div className="item"><ListOutlinedIcon className="icon"/></div>
          <div className="item">
            <img 
              src="https://images.pexels.com/photos/13365744/pexels-photo-13365744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar