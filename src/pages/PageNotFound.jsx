import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const PageNotFound = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-[80%] px-7">
        <Navbar />
        <div className="flex justify-center items-center h-[89vh] ">
          PAGE NOT FOUND, CONNECT TO INTERNET...
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
