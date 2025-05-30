import React from 'react'

const SidebarCard = () => {
  return (
    <div className='flex flex-col gap-1 w-[12rem] h-[15rem] p-3 rounded-2xl bg-blue-200 ml-1 mt-15'>
      <img 
      height={200}
      width={250}
      src="./side.png" alt="" />
<h4 className='text-center text-blue-950 font-bold'>Appolo Hospital Ltd.</h4>
<p className='text-center text-slate-400'>Call:023 32034 44</p>

<h3 className='mt-4 text-blue-500 font-bold text-center'>HOSPITAL PROFILE</h3>

    </div>

  )
}

export default SidebarCard
