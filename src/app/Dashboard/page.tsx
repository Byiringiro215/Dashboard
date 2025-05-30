import Sidebar from "../components/sidebar";
import React from 'react';
import AllDashboardCards from "../components/AllDashboardCards";
import Graph from "../components/graph";
import AllCharts from "../components/AllCharts";
import ToggleDarkmode from "../components/ToggleDarkmode";

const Dashboard = () => {
  return (
    <div className='flex gap-0 py-0 '>
      <Sidebar />
      <div className="w-full bg-gray-100 p- rounded-lg shadow-md ml-0 sm:ml-[15rem] overflow-x-hidden">
        <div className="flex gap-[10rem] md:gap-[20rem] lg:gap-[48rem] items-center top-0 bg-white w-full px-5 py-3 fixed z-50">
          <div><h1 className="text-2xl font-bold ">Dashboard</h1></div>
          <div className="flex items-center space-x-4"> 
            <ToggleDarkmode />
            <div className="border-gray-300 shadow-lg rounded-full border-2">
              <img
                src="./user.png"
                alt="User image"
                height={40}
                width={40}
                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full"
              />
            </div>
          </div>
        </div>
        
        <AllDashboardCards />
        <Graph />
        <AllCharts />
      </div>
    </div>
  );
};

export default Dashboard;
