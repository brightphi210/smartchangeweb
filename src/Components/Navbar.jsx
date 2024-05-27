import React, { useState } from 'react'
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import pics from './images/ss.jpg'

const Navbar = ({onClick}) => {

    const [token, setToken] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

    console.log(token.admin)
  return (
    <div className='lg:flex lg:items-center 
        lg:px-20 lg:py-10  lg:h-24 block p-5 
        lg:bg-none fixed w-full bg-zinc-white 
        border-b border-zinc-100 border-solid bg-white z-50'
    >


        <div className='lg:w-full lg:block hidden'>
            <input type="text" placeholder="Search anything here . . " 
                className="input input-bordered lg:w-2/4 lg:text-xs " 
            />
        </div>

        <div className=' lg:w-2/3 md:w-full w-full flex lg:pt-0 pb-4 pt-3 '>

            <p onClick={onClick} className='lg:hidden block'><SlMenu /></p>

            <div className='lg:flex lg:items-center lg:gap-7 flex gap-3 lg:m-0 ml-auto items-start lg:p-0'>

                {/* <p className='lg:text-xl text-orange-400 text-lg'><IoNotifications /></p> */}



                <div className='flex gap-4 items-center'>

                    <div className='w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-slate-300'>
                        <p>A</p>
                    </div>

                    <div>
                        <p className='lg:text-xs text-xs'>{token.admin.fullName}</p>
                        <p className='lg:text-xs text-xs'>{token.admin.role}</p>
                    </div>
                </div>


                <p className='lg:text-xl text-lg'><IoMdArrowDropdown /></p>

            </div>
            
        </div>

        <div className='lg:w-full lg:hidden'>
            <input type="text" placeholder="Search anything here . . " 
                className="input input-bordered lg:w-96 w-full text-xs p-3 " 
            />
        </div>
    </div>
  )
}

export default Navbar