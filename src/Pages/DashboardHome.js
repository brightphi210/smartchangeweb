import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import DashHomeCompo from '../Components/DashHomeCompo'

const DashboardHome = () => {
  return (
    <div className='flex w-full'>
        <div className='hidden lg:block'><SideBar /></div>
        <div className='w-full lg:pl-72 pl-0'>
            <Navbar />
            <DashHomeCompo />
        </div>
    </div>
  )
}

export default DashboardHome