import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import AddProduct from "./AddProduct";
import AddBarcode from "./AddBarcode";
import Orders from "./Orders";
import Listing from "./Listing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
    
  },
  {
    path: "/login",
    element: <Login/>
    
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
    
  }
  ,
  {
    path: "/signup",
    element: <Signup/>
    
  },
  {
    path: "/addproduct",
    element: <AddProduct/>
    
  },{
    path: "/barcode",
    element: <AddBarcode/>
    
  },{
    path: "/orders",
    element: <Orders/>
    
  },{
    path: "/listing",
    element: <Listing/>
    
  }
  

  
]);
function App() {
  return (
    <div className="" >
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
