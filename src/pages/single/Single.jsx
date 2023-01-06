import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Tables";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="singleImage"
              />
              <div className="details">
                <h1 className="detailTitle">Snow</h1>
                <div className="detailItem">
                  <span className="ItemKey">Email : </span>
                  <span className="ItemValue">snow@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Phone : </span>
                  <span className="ItemValue">+1 234 567 89</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Address : </span>
                  <span className="ItemValue">Elton st. 24 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Country : </span>
                  <span className="ItemValue">USA</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Job : </span>
                  <span className="ItemValue">Software Enginer</span>
                </div>
              </div>  
            </div>
          </div>
          <div className="right">
            <Chart aspect={ 3 / 1 } title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Single;