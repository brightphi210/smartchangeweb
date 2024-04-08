import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import DashOverviewMerchantCompo from '../Components/DashOverviewMerchantCompo'

const DashboardOverviewMerchant = () => {
  return (
    <div className='flex w-full'>
        <SideBar />
        <div className='w-full pl-72'>
            <Navbar />
            <DashOverviewMerchantCompo />
        </div>
    </div>
  )
}

export default DashboardOverviewMerchant