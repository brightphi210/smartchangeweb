import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import DashHomeCompo from '../Components/DashHomeCompo'

const DashboardHome = () => {
  
  const [show, setShow] = useState(true)

  const handleShow = () =>{
    setShow(!show)
  }
  return (
    <div className='flex w-full relative'>
        <div className={`${show ? 'hidden' : 'block'} lg:relative lg:w-0 fixed w-full bg-zinc-100 h-full top-0 left-0`}><SideBar /></div>

        <div className='hidden lg:block'><SideBar /></div>

        <div className='w-full lg:pl-72 pl-0'>
            <Navbar onClick={handleShow}/>
            <DashHomeCompo />
        </div>
    </div>
  )
}

export default DashboardHome