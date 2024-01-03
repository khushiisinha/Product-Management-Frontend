import React ,{useEffect} from "react";
import Barcode from "react-barcode";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import product from './Images/product.jpg'

import { useLocation,useNavigate } from "react-router-dom";
function AddBarcode() {
  const navigate=useNavigate();
  const location=useLocation();
  
  function handleDashboard(){
    
           navigate('/dashboard',{
            state:{
              userIsAuthenticated:true,
              
            }
           })
           return;
    
  }


  

  
  useEffect(()=>{
    if(location.state==null|| !location.state.userIsAuthenticated){
      navigate('/login');
    }
  },[location, navigate])
    const componentRef1=React.useRef();
    const componentRef2 = React.useRef();
    
    const handleSave = useReactToPrint({
        content: () => componentRef1.current,
      });
    const handlePrint = useReactToPrint({
        content: () => componentRef2.current,
      });
  return (
    <div className="flex flex-col min-h-screen bg-black" >
      <div ref={componentRef1}>
      <div className="h-10 bg-black text-white shadow-md flex justify-center items-center mb-1" >
        <span className="font-bold text-2xl ml-2">Barcode</span>
      </div>
      <div className="bg-black flex-grow flex flex-col p-4 gap-4 m-">
        <div className="justify-center items-center flex bg-slate-50 text-3xl font-extrabold p-4 rounded-lg ">
          Successfully Added Product
        </div>
        <div className=" flex bg-slate-50  p-4 rounded-lg ">
          <div className="h-40 w-44 ">
            <img src={product} alt="image" />
          </div>
          <div className="flex flex-col p-4 gap-4">
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
                <div className="text-blue-950 font-bold"> Manufacturer : </div>
                <div> Mr.XYZ</div>
              </div>
              <div className="flex gap-1">
                <div className="text-blue-950 font-bold"> Product Id : </div>
                <div> DX-10079</div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex gap-1">
                <div className="text-blue-950 font-bold">Price (per piece) :  </div>
                <div> 1500/-</div>
              </div>
              <div className="flex gap-1">
                <div className="text-blue-950 font-bold"> Quantity : </div>
                <div> 5</div>
              </div>
              <div className="flex gap-1">
                <div className="text-blue-950 font-bold"> Category : </div>
                <div> New Stock</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex bg-slate-50 justify-around items-center p-4 rounded-lg ">
        <div ref={componentRef2}>
           <Barcode value="123456789" />
           </div>
             
            <button onClick={handlePrint}  className="bg-blue-900 text-white p-1 px-4 rounded-xl">Print Barcode</button>

             <button onClick={handleSave}  className="bg-blue-900 text-white p-1 px-4 rounded-xl">Print Bill(Save to device)</button>
             <button onClick={() => {
              navigate('/listing', {
                state: {
                  userIsAuthenticated: true,
                },
              });

              }}
            className="bg-black text-white border-2 border-white p-2 rounded-md flex gap-1 hover:font-bold"
          >
           
            
            Listing
          </button>
        </div>
        </div>
        </div>
        <button  className="bg-blue-900 text-white p-1 px-4 rounded-xl w-2/12 "onClick={handleDashboard}> ⬅ Go to Dashboard</button>
      
      
    </div>
  );
}

export default AddBarcode;
