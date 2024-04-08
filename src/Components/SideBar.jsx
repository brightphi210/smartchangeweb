import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { PiNotepadLight } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";


const SideBar = () => {
  return (

    // md	768px
    // lg	1024px
    // xl	1280px
    // 2xl	1536px

    <div className='lg:bg-zinc-50 md:bg-zinc-50 lg:fixed md"fixed lg:h-screen md:h-screen lg:w-72 md:w-60 lg:p-10 md:p-5 flex flex-col'>

        <div className='w-32 py-10 pt-0'>
          <img src={logo} alt="" />
        </div>


        <ul className='flex flex-col gap-10'>
          <Link to={'/'}><li className='list-none text-sm flex gap-3 items-center hover:text-yellow-400'><MdDashboard /> Dashboard</li></Link>
          <Link to={'/'}><li className='list-none text-sm flex gap-3 items-center hover:text-yellow-400'><PiNotepadLight />Overview</li></Link>
          <div className='flex flex-col gap-5'>
            <Link to={'/user-overview'}><p className='pl-5 text-sm'>User</p></Link>
            <Link to={'/merchant-overview'}><p className='pl-5 text-sm'>Merchants</p></Link>
          </div>
          <Link to={'/transaction-history'}><li className='list-none text-sm flex gap-3 items-center hover:text-yellow-400'><LuHistory />Transaction History</li></Link>
          <Link to={'/supa-admin'}><li className='list-none text-sm flex gap-3 items-center hover:text-yellow-400'><RiAdminLine />Super Admin</li></Link>
        </ul>

        <button className='mt-auto bg-white mr-auto py-3 px-10 rounded-md text-sm flex gap-3 items-center'>Logout <IoLogOutOutline /></button>
    </div>
  )
}

export default SideBar