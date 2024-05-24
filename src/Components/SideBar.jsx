import React, { useState } from 'react'
import logo from './images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { PiNotepadLight } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";



const SideBar = ({onClick}) => {

  const navigate = useNavigate()
  const [token, setToken] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)


  const logout = async (e) => {
    e.preventDefault()
    setToken(null)
    localStorage.removeItem('token')
    navigate('/login')
  }


  return (

    // md	768px
    // lg	1024px
    // xl	1280px
    // 2xl	1536px

    <div className='
        lg:bg-zinc-50 md:bg-zinc-50 
        lg:fixed md"fixed lg:h-screen
        md:h-screen lg:w-72 md:w-52 lg:p-10 
        md:p-5 flex flex-col pt-10 pl-10'
      >

        <p onClick={onClick} className='lg:hidden block pb-5 text-2xl'><AiOutlineClose /></p>

        <div className='w-32 py-10 pt-0'>
          <img src={logo} alt="" />
        </div>


        <ul className='flex flex-col lg:gap-10 gap-8'>
          <Link to={'/'}><li className='list-none lg:text-xs text-sm flex gap-3 items-center hover:text-yellow-400'><MdDashboard /> Dashboard</li></Link>
          <Link to={'/'}><li className='list-none lg:text-xs text-sm flex gap-3 items-center hover:text-yellow-400'><PiNotepadLight />Overview</li></Link>
          <div className='flex flex-col gap-5'>
            <Link to={'/user-overview'}><p className='pl-5 lg:text-sm text-xs'>User</p></Link>
            <Link to={'/merchant-overview'}><p className='pl-5 lg:text-sm text-xs'>Merchants</p></Link>
          </div>
          <Link to={'/transaction-history'}><li className='list-none lg:text-xs text-sm flex gap-3 items-center hover:text-yellow-400'><LuHistory />Transaction History</li></Link>
          <Link to={'/supa-admin'}><li className='list-none flex gap-3 lg:text-xs text-sm items-center hover:text-yellow-400'><RiAdminLine />Super Admin</li></Link>
          <Link to={'/activity-logs'}><li className='list-none flex gap-3 lg:text-xs text-sm items-center hover:text-yellow-400'><HiOutlineClipboardDocumentList />Activity Log</li></Link>
        </ul>

        <button onClick={logout} className='lg:mt-auto bg-white mr-auto mt-8 py-3 px-10 rounded-md text-sm flex gap-3 items-center'>Logout <IoLogOutOutline /></button>
    </div>
  )
}

export default SideBar