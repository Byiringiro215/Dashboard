import React from 'react'
import Sidebar from '../components/sidebar'
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex gap-2 py-3 '>
      <Sidebar/>
      <div>{children}</div>
    </div>
  )
}

export default layout
