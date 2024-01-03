import React, { useState } from "react";
import { Link } from "react-router-dom";
import cover from "./Images/cover.png";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect } from "react";
function AddProduct() {

  const location=useLocation();
  const navigate=useNavigate();
  useEffect(()=>{
    if(location.state==null|| !location.state.userIsAuthenticated){
      navigate('/login');
    }
  },[location, navigate])
  
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [productName, setProductName] = useState(null);
  const [productId, setProductId] = useState(null);
  const [manufacturerName, setManufacturerName] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [productQuantity, setProductQuantity] = useState(null);

  function handleCancel(){
          setProductName("");
          setProductId("")
          setManufacturerName("")
          setProductDescription("")
          setProductQuantity("")
  }
  function handleChange(e) {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  }
  function handleUpload() {}
  return (
    <div className="gap-4 flex flex-col min-h-screen bg-black">
      <div className="h-10 bg-slate-50 flex justify-center items-center ">
        <span className="font-bold text-2xl ml-2">Add Product</span>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className="border-4 border-white rounded-2xl p-4 ">

        
        <div className="flex flex-col justify-center items-center gap-4">
          <label htmlFor="upload-button">
            {image.preview ? (
              <div className="h-40 w-48 border-4 border-black flex justify-center items-center">
                <img src={image.preview} alt="" className="h-32 w-36" />
              </div>
            ) : (
              <div className="h-40 w-48 bg-white opacity-40 cursor-pointer flex flex-col justify-center items-center rounded-md">
                <img src={cover} alt="" className="h-28 w-28" />
                <span className="font-bold">Add Cover Image</span>
              </div>
            )}
          </label>

          <input
            type="file"
            id="upload-button"
            className="hidden"
            onChange={handleChange}
          />

          <button
            onClick={handleUpload}
            className="bg-blue-900 text-white p-1 px-4 rounded-xl"
          >
            Upload Picture
          </button>
        </div>

        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <input
            type="text"
            className=" border-2 border-black p-2 rounded-md outline-blue-800 w-full"
            placeholder="Add Product name here"
            value={productName}
            onChange={(e)=>{setProductName(e.target.value)}}
          />
          <input
            type="text"
            className="w-full border-2 border-black p-2 rounded-md outline-blue-800"
            placeholder="Product Id"
            value={productId}
            onChange={(e)=>{setProductId(e.target.value)}}
          />
          <input
            type="text"
            className="w-full border-2 border-black p-2 rounded-md outline-blue-800"
            placeholder="Manufacturer Name"
            value={manufacturerName}
            onChange={(e)=>{setManufacturerName(e.target.value)}}
          />
          <input
            type="text"
            className="w-full border-2 border-black p-2 rounded-md outline-blue-800"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e)=>{setProductDescription(e.target.value)}}
          />
          <input
            type="text"
            className="w-full border-2 border-black p-2 rounded-md outline-blue-800"
            placeholder="Product Quantity"
            value={productQuantity}
            onChange={(e)=>{setProductQuantity(e.target.value)}}
            
          />

          <div className="flex gap-4">
            <label htmlFor="" className="text-3xl font-bold text-white underline">
              Select Category
            </label>
            <select name="" id="" className="shadow-md p-2 w-44">
              <option value="">New Stock</option>
              <option value="">Old Stock</option>
            </select>
          </div>
        </div>
        <div className="flex justify-around px-4">
          <button className="bg-red-500 p-2 rounded-xl text-white" onClick={handleCancel}>
            Cancel
          </button>
           <button onClick={() => {
              navigate('/barcode', {
                state: {
                  userIsAuthenticated: true,
                },
              });

              }}className="bg-blue-900 p-2 rounded-xl text-white">
            Save Changes
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AddProduct;
