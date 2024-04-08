import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import pics from './images/ss.jpg'

const Navbar = ({onClick}) => {
  return (
    <div className='lg:flex lg:items-center 
        lg:px-20 lg:py-10  lg:h-24 block p-5 
        lg:bg-none fixed w-full bg-zinc-white lg:justify-between
        border-b border-zinc-100 border-solid bg-white'
    >


        <div className='lg:w-full lg:block hidden'>
            <input type="text" placeholder="Search anything here . . " 
                className="input input-bordered lg:w-2/4 " 
            />
        </div>

        <div className=' lg:w-full flex lg:pt-0 pb-4 pt-3 md:w-full xl:w-full'>

            <p onClick={onClick} className='lg:hidden block'><SlMenu /></p>

            <div className='lg:flex lg:items-center lg:gap-10 flex gap-3 lg:m-0 ml-auto items-start'>

                <p className='lg:text-2xl text-orange-400 text-lg'><IoNotifications /></p>



                <div className='flex gap-4 items-center'>

                    <div className='w-8, rounded-full overflow-hidden'>
                        <img className='lg:w-10 w-7' src={pics} alt="" />
                    </div>

                    <div>
                        <h2 className='lg:text-lg text-xs'>Ezekiel Zeke</h2>
                        <p className='lg:text-sm text-xs'>Admin</p>
                    </div>
                </div>


                <p className='lg:text-2xl text-lg'><IoMdArrowDropdown /></p>

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