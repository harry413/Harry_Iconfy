import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Document() {
  return (
    <>
      <div className="flex  bg-gray-800">
        <div className=" bg-gray-800 flex flex-col">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 md:p-10 md:m-2">
          <h1 className="text-4xl md:text7xl font-serif ">Documentation</h1>
          <p>This is the Skills icons you are searching for</p>
        </div>
      </div>
    </>
  );
}
