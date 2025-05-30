import React from 'react'
import DashboardCard from './DashboardCards'
import {
    ChartBarIcon,
    BuildingOfficeIcon,
    ClipboardDocumentListIcon,
    DocumentTextIcon,
    UserCircleIcon,
    UserGroupIcon,
    HeartIcon,
  } from '@heroicons/react/24/outline';
const AllDashboardCards = () => {
  return (
    <div className='grid grid-cols-1 gap-2 py-5 mt-[4rem]  md:grid-cols-2 lg:grid-cols-3 ml-3 pr-3 '>
      <DashboardCard title='Total Patients' amount='61,923' description='Total Patient Admited:' total='32,303' icon={ChartBarIcon} className='bg-cyan-500'/>
      <DashboardCard title='Operation Cost' amount='$2,923' description='Avg cost per operation:' total='$30.0' icon={BuildingOfficeIcon} className='bg-blue-800'/>
      <DashboardCard title='Avg Patient Per Doctor' amount='30.4' description='Available:' total='120' icon={ClipboardDocumentListIcon} className='bg-orange-500'/>
    </div>
  )
}

export default AllDashboardCards
