import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import DashOverviewUserCompo from '../Components/DashOverviewUserCompo'

const DashboardOverviewUser = () => {

  const [show, setShow] = useState(false)

  const handleShow = () =>{
    setShow(true)
  }

  const handleHide = () =>{
    setShow(false)
  }
  return (
    <div className='flex w-full'>
        <div  className={`${show === false ? 'hidden' : 'block'} lg:relative lg:w-0 fixed w-10/12 bg-yellow-50 h-full  left-0 z-50`}><SideBar onClick={handleHide}/></div>
        <div className='hidden lg:block'><SideBar /></div>
        <div className='w-full lg:pl-72 pl-0'>
          <Navbar onClick={handleShow}/>
          <DashOverviewUserCompo />
        </div>
    </div>
  )
}

export default DashboardOverviewUser