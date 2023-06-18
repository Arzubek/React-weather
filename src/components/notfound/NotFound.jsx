import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="w-[500px] text-white flex flex-col gap-5 items-center">
        <h1 className="text-[70px] font-bold">Not found!</h1>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          restart
        </button>
      </div>
    </div>
  );
};

export default NotFound;
