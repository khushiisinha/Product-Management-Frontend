import React from 'react'
import logout from "./Images/logout.png";
import scan from "./Images/scan.png";
function Navbar() {
  return (
    <div className="h-10 bg-slate-50 shadow-md flex justify-between items-center">
        <span className="font-bold text-lg ml-2">Made2Automate</span>
        <div className="flex gap-3 ">
          <img src={scan} alt="Scan" className="h-8" />
          <img src={logout} alt="Logout" className="h-8 mr-2" />
        </div>
      </div>
  )
}

export default Navbar