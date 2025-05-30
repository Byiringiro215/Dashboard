type ProgressListProps = {
    label:string,
    value:number
}
import React from 'react'

const Progresslist = ({items}:{items:ProgressListProps[]}) => {
  return (
    <div>
      <h1 className='text-black font-[500] mb-2'>Doctors Treatment Plans</h1>
     {items.map((item,index)=>(
<div key={item.label} >
    <div className='flex justify-between mr-3 w-[] sm-w[18rem] my-1'>
        <span className='text-black text-sm'>{item.label}</span>
        <span className='text-black font-[500]'>{`${item.value}%`}</span>
    </div>
    <div className='bg-gray-300 w-full  rounded-full'>
        <div className='rounded-full' style={{width:`${item.value}%`, height:'5px', backgroundColor:'blue',}}></div>
    </div>
</div>
     ))}
    </div>
  )
}

export default Progresslist

