import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen  bg-main ">
      <div className="col-span-2 bg-main text-white">
        <Sidebar />
      </div>
      <div className="col-span-10 grid grid-rows-12 h-full main mr-6">
        <div className="bg-main text-white row-span-1 max-h-12">
          <Navbar />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
