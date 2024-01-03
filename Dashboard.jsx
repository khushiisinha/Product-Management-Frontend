import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { dashboardViews, dashboardViewsTotal } from "./Data";
import DashboardViews from "./DashboardViews";
import DashboardTab from "./DashboardTab";
import { Link } from "react-router-dom";
import logout from "./Images/logout.png";
import scan from "./Images/scan.png";
import add from "./Images/add.png";
import Barchart from "./Barchart";
import Areachart from "./Areachart";
import ToolTip from "./Tooltip";
import Piechart from "./Piechart";
import { useLocation,useNavigate } from "react-router-dom";
function Dashboard() {
  const location=useLocation();
  const navigate=useNavigate();
  useEffect(()=>{
    if(location.state==null|| !location.state.userIsAuthenticated){
      navigate('/login');
    }
  },[location, navigate])

  const handleLogout = () => {
    
    localStorage.removeItem('token');

    navigate('/login');
  };
  return (
    <div className="gap-4 flex flex-col min-h-screen">
     <div className="h-10 bg-black shadow-md flex justify-between items-center ">
        <Link
          to="/dashboard"
          className="font-bold text-lg ml-2 cursor-pointer text-white "
        >
          Made2Automate
        </Link>
        <div className="flex gap-3 ">
          <img src={scan} alt="Scan" className="h-8 bg-white rounded-lg" />
          <button onClick={handleLogout}>
            <img src={logout} alt="Logout" className="h-8 mr-2" />
          </button>

        </div>
      </div>

      <div className=" bg-black flex flex-col flex-grow gap-4 p-4">
        <div className="flex justify-around mt-4">
          {dashboardViews.map((elem, index) => {
            return (
              <DashboardViews title={elem} total={dashboardViewsTotal[index]} />
            );
          })}
        </div>
        <div className=" flex justify-end gap-4">
          
        
          <button onClick={() => {
              navigate('/addproduct', {
                state: {
                  userIsAuthenticated: true,
                },
              });

              }}
            className="bg-black text-white border-2 border-white p-2 rounded-md flex gap-1 hover:font-bold"
          >
           
            <img
              src={add}
              alt=" add"
              className=" rounded-xl "
            />
            Add Product
          </button>
        </div>
      
          <div className="flex gap-2 ">
           
          <div className="flex flex-col gap-4">
          {dashboardViews.map((elem, index) => {
          return <DashboardTab title={elem} />;
        })}
          
        
        </div>
        <div className=" flex flex-col gap-6 w-1/2">
              <ToolTip />
              <Piechart/>
              <Barchart/>
              <Areachart/>
              <Piechart/>
            </div>
          </div>
    
          
      </div>
    </div>
  );
}

export default Dashboard;
