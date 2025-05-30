import React from 'react'
import Navlinks from './navlinks'
import Logo from './logo'
import SidebarCard from './SidebarCard'
import Link from 'next/link'

import {Cog6ToothIcon} from '@heroicons/react/24/outline'
const Sidebar = () => {
  return (
  
<div className='px-2  rounded-[5px] w-[14rem] overflow-y-scroll overflow-x-hidden fixed  h-screen hidden sm:block ' >
        <Logo/>
      <Navlinks/>
<SidebarCard/>
<hr className='mt-[2rem] text-gray-400 w-full' />
<Link href='#' className='flex items-center text-gray-500 ml-5 gap-1 my-2'>
<Cog6ToothIcon className='h-[20px]'/> 
<span>Settings</span>
</Link>
    </div>
    
    
  )
}

export default Sidebar
