'use client'
import {
    ChartBarIcon,
    BuildingOfficeIcon,
    ClipboardDocumentListIcon,
    DocumentTextIcon,
    UserCircleIcon,
    UserGroupIcon,
    HeartIcon,
  } from '@heroicons/react/24/outline';
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

const Navlinks= () => {
    const navbarlinks=[{
section:'Hospital Performance',
links:[
{
name:'Dashboard',
href:'/dashboard',
icon:ChartBarIcon ,
isActive:true
},
{
name:'Departments',
 href:'/departments',
  icon:BuildingOfficeIcon,
  
 },
            
{
    name:'TaskBoard',
    href:'/taskboard',
    icon:  ClipboardDocumentListIcon,
    
},
    {
        name:'Reports',
        href:'/reports',
        icon:DocumentTextIcon,
       
    }
]
},{
    section:'',
    links:[
        {
            name:'Patient History',
            href:'/history',
            icon:UserCircleIcon,
           
        },
        {
            name:'Doctors Profile',
            href:'/doctors-profile',
            icon: UserGroupIcon,
            
        },
        {
            name:'Donation History',
            href:'/history-of-donation',
            icon: HeartIcon,
           
        }
    ]
}
        ]
    
    //   const [isActive,setIsActive]=useState(false);

  return (
    <div className='mt-[4rem]'>
   {navbarlinks.map((section,index)=>{
    return(
        <div key={index}>
       
<ol>
    <h1 className='text-blue-500 text-[16px] font-bold ml-3'>{section.section}</h1>
    <div className='flex flex-col gap-2 mt-2'>
        {section.links.map((link,index)=>{
            return(
                <li key={index} className={clsx(
                    'flex items-center gap-2 text-gray-500 text-[14px] hover:text-white hover:bg-blue-600 w-[9rem] h-10 rounded-[10px] cursor-pointer ml-6 px-0.5',{
                        'bg-blue-600 text-white':link.isActive===true,
                        
                    }
                )} >
                    <link.icon className='w-5 h-5'/>
                    <Link href={link.href}>{link.name}</Link>
                </li>
            )
        })}
    </div>
</ol>
        </div>

    )

   }
   )}

      
    </div>
  )
}

export default Navlinks
