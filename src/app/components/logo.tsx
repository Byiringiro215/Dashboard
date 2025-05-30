import React from "react";
import { HeartIcon,} from '@heroicons/react/24/outline';



const Logo = () => {
  return (
    <div className="flex items-center gap-1 pl-3  text-blue-700 bg-slate-200 h-[3rem] w-[12.5rem] rounded-2xl  fixed">
      <HeartIcon className="h-5 font-extrabold"/>
      <span>Health Care</span>
    </div>
  )
}

export default Logo
