import React from "react";
import ListingTemplate from "./ListingTemplate";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Listing() {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state == null || !location.state.userIsAuthenticated) {
      navigate("/login");
    }
  }, [location, navigate]);
  function handleBack() {
    navigate("/barcode", {
      state: {
        userIsAuthenticated: true,
      },
    });
    return;
  }
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="h-10 bg-black shadow-md flex justify-center items-center mb-1">
        <span className="font-bold text-2xl ml-2 text-white">Listing</span>
      </div>

      <div className="bg-black flex-grow flex flex-col p-4 gap-4 m-2">
        <ListingTemplate />
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="text-white underline text-2xl">
            E-Commerce Listing
          </div>
          <div className="text-white flex justify-between w-1/4">
            <div className="text-white underline text-xl"> Amazon</div>
            <button className="border-white border-4 p-1 px-4 rounded-xl">
              {" "}
              Upload
            </button>
          </div>
          <div className="text-white flex justify-between w-1/4">
            <div className="text-white underline text-xl"> Flipkart</div>
            <button className="border-white border-4 p-1 px-4 rounded-xl">
              {" "}
              Upload
            </button>
          </div>
          <div className="text-white flex justify-between w-1/4">
            <div className="text-white underline text-xl"> Indiamart</div>
            <button className="border-white border-4 p-1 px-4 rounded-xl">
              {" "}
              Upload
            </button>
          </div>
          <div className="text-white flex justify-between w-1/4">
            <div className="text-white underline text-xl"> Website</div>
            <button className="border-white border-4 p-1 px-4 rounded-xl">
              {" "}
              Upload
            </button>
          </div>
        </div>
        <button
          className="bg-blue-900 text-white p-1 px-4 rounded-xl w-2/12 "
          onClick={handleBack}
        >
          {" "}
          ⬅ Go to back
        </button>
      </div>
    </div>
  );
}

export default Listing;
