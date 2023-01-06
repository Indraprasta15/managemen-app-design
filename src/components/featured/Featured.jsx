import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revanue</div>
        <MoreVertOutlinedIcon fontSize="small" cursor="pointer"/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text={"70%"} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$ 2254</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be include.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResults negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$2.12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResults positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$2.12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResults positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$2.12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;