import React from "react";
import OrderTemplate from "./OrderTemplate";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Orders() {
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (location.state == null || !location.state.userIsAuthenticated) {
      navigate("/login");
    }
  }, [location, navigate]);
  function handleDashboard() {
    navigate("/dashboard", {
      state: {
        userIsAuthenticated: true,
      },
    });
    return;
  }
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="h-10 bg-black shadow-md flex justify-center items-center mb-1">
        <span className="font-bold text-2xl ml-2 text-white">Orders</span>
      </div>

      <div className="bg-black flex-grow flex flex-col p-2 gap-4 m-2">
        <OrderTemplate />
        <OrderTemplate />
        <button
          className="bg-blue-900 text-white p-1 px-4 rounded-xl w-1/6"
          onClick={handleDashboard}
        >
          {" "}
          ⬅ Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Orders;
