import React from 'react'
import product from './Images/product.jpg'
function ListingTemplate() {
  return (
    <div className='border-8 border-white p-4 rounded-xl'>
    <div className=" flex flex-col bg-black text-white p-4 rounded-lg">
    <div className=" flex">
      <div className="h-40 w-60 border border-black">
        <img src={product} alt="image" className='w-60 h-40' />
      </div>

      <div className="flex flex-col justify-around items-center   p-4 gap-4">
      <div className="flex gap-1">
                <div className=" font-extrabold"> Product Name : </div>
                <div> Digital Length Meter</div>
              </div>
              <div className="flex gap-1">
                <div className=" font-extrabold"> Product Description : </div>
                <div> This is a digital length meter which is use to measure length</div>
              </div>
        <div className="flex gap-4 ">
          <div className="flex gap-1">
            <div className=" font-extrabold"> Price : </div>
            <div> 1500/- </div>
          </div>
          <div className="flex gap-1">
            <div className=" font-extrabold"> Customer Name : </div>
            <div> mr. ABC</div>
          </div>
          <div className=" border border-white opacity-50 rounded-xl  px-2">
            5 quantity
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default ListingTemplate
