import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import SupaAdminCompo from '../Components/SupaAdminCompo'

const SupaAdmin = () => {
  return (
    <div className='flex w-full'>
        <SideBar />

        <div className='w-full pl-72'>
            <Navbar />
            <SupaAdminCompo />
        </div>
    </div>
  )
}

export default SupaAdmin