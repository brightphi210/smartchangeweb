import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import DashOverviewUserCompo from '../Components/DashOverviewUserCompo'

const DashboardOverviewUser = () => {
  return (
    <div className='flex w-full'>
        <SideBar />
        <div className='w-full pl-72'>
          <Navbar />
          <DashOverviewUserCompo />
        </div>
    </div>
  )
}

export default DashboardOverviewUser