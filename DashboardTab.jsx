import React from "react";
import ViewData from "./ViewData";
import { orderData } from "./Data";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
function DashboardTab(props) {
  const navigate=useNavigate();
  return (
    <div className="flex  flex-col  flex-grow bg-white  rounded-lg p-4 gap-2 ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-extrabold hover:underline cursor-pointer">
            {props.title}
          </div>
          <div>Summary of your {props.title}</div>
        </div>

        <button
          onClick={() => {
            navigate("/orders", {
              state: {
                userIsAuthenticated: true,
              },
            });
          }}
          className="bg-black hover:bg-white hover:text-black hover:font-bold hover:border-black hover:border-2 text-white p-1 rounded-lg h-8"
        >
          View all
        </button>
      </div>

      <div className="flex flex-col gap-4 ">
        {orderData.map((elem, index) => {
          return (
            <ViewData
              title={elem.title}
              description={elem.description}
              quantity={elem.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DashboardTab;
