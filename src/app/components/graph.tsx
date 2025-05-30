import React from "react";
import Link from "next/link";
import clsx from "clsx";
import ComboChart from "./chart";
const Graph = () => {
  const buttons = [
    {
      name: "Last Week",
      href: "/last-week",
    },
    {
      name: "LastMonth",
      href: "/last-month",
    },
    {
      name: "3 Months",
      href: "/3-months",
    },
    {
      name: "Yearly",
      href: "/yearly",
      isActive: true,
    },
    {
      name: "Lifetime",
      href: "/lifetime",
    },
  ];
  return (
    <div className="rounded-[10px] shadow-lg p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold">Overview</h1>
        <div className="grid gap-y-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mr-7 ">
          {buttons.map((button, index) => (
            <Link
              href="#"
              key={index}
              className={clsx(
                " border-2 border-blue-600 text-blue-600 rounded-[10px] px-2 py-0 text-[10px] sm:text-[14px] h-[2rem] sm:h-[2rem] font-bold hover:bg-blue-600 hover:text-white ml-2 flex items-center justify-center",
                {
                  "bg-blue-600 text-white": button.isActive === true,
                }
              )}
            >
              {button.name}
            </Link>
          ))}
        </div>

      </div>
      <div className="flex items-center gap-6 mt-4">
<form action="" className="flex gap-4">
    <div className="flex items-center gap-1">
    <input type="radio" name="radio" id="cost" value='cost' className="accent-orange-500 cursor-pointer"/>
    <label htmlFor="cost" className="text-gray-500 text-[14px] font-bold">Cost</label>
    </div>
    <div className="flex items-center gap-1">
    <input type="radio" name="radio" id="admited-patient" value='admited-patient' className="accent-blue-700 cursor-pointer"/>
    <label htmlFor="admited-patient" className="text-gray-500 text-[14px] font-bold">Admited Patient</label>
    </div>
    <div className="flex items-center gap-1">
    <input type="radio" name="radio" id="out-patient" value='outp-patient' className="accent-gray-400 cursor-pointer"/>
    <label htmlFor="out-patient" className="text-gray-500 text-[14px] font-bold">Out Patient</label>
    </div>
   
</form>
</div>
<div>
   <ComboChart/> 
</div>
    </div>
  );
};

export default Graph;
