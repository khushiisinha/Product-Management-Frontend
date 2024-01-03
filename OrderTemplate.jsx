import React from "react";
import product from './Images/product.jpg'
function OrderTemplate() {
  return (
    <div  className='border-4 border-white p-4 rounded-xl'>
    <div className=" flex flex-col bg-slate-50  p-4 rounded-lg">
      <div className=" flex">
        <div className="h-40 w-60 ">
          <img src={product}alt="image" />
        </div>

        <div className="flex flex-col justify-around items-center   p-4 gap-4">
        <div className="flex gap-1">
                <div className="text-blue-950 font-bold"> Product Name : </div>
                <div> Digital Length Meter</div>
              </div>
              <div className="flex gap-1">
                <div className="text-blue-950 font-bold"> Product Description : </div>
                <div> This is a digital length meter which is use to measure length</div>
              </div>
          <div className="flex gap-4 ">
            <div className="flex gap-1">
              <div className="text-blue-950 font-bold"> Price : </div>
              <div> 1500/- </div>
            </div>
            <div className="flex gap-1">
              <div className="text-blue-950 font-bold"> Customer Name : </div>
              <div> Mr.ABC</div>
            </div>
            <div className=" border border-black opacity-50 rounded-xl p-1 px-2">
              5 quantity
            </div>
          </div>
        </div>
      </div>
      <div className=" flex bg-slate-50 justify-around items-center p-4 rounded-lg ">
        <button className="bg-blue-900 text-white p-1 px-4 rounded-xl">
          Order Again
        </button>
        <button className="bg-blue-900 text-white p-1 px-4 rounded-xl">
          View Details
        </button>
      </div>
    </div>
    </div>
  );
}

export default OrderTemplate;
