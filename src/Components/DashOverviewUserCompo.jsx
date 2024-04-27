import React from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const DashOverviewUserCompo = () => {
  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-[35rem] overflow-y-scroll  lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
        <div className=''>
            <h2 className='pb-5 font-semibold lg:text-lg text-sm'>Overview - User</h2>


            <div className='lg:w-full '>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                        <tr className='bg-yellow-300 mb-10 -z-0'>
                            <th>Name</th> 
                            <th>Phone number</th> 
                            <th>Email address</th> 
                            <th>Transaction Volume</th> 
                            <th>Action</th> 
                        </tr>
                        </thead> 
                         
                        <tbody>
                        <tr>
                            <Link to={'/user-details'}><td className='pt-5 underline'>Ezekiel Zeke</td> </Link>
                            <td className='pt-5'>+2347038570548</td> 
                            <td className='pt-5'>zek@gmail.com</td> 
                            <td className='pt-5'>-- --</td> 
                            <details className="dropdown">
                                <summary className="m-1 btn bg-white hover:bg-zinc-50">
                                <p className='flex items-center gap-2 lg:text-xs text-xs cursor-pointer'><p className='text-lg'><MdArrowDropDown /></p>Select Action</p>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white  rounded-md mt-1 w-40">
                                    <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-red-500'>Ban</li>
                                    <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-green-600'>Reinstate</li>
                                </ul>
                            </details>
                        </tr>
                        </tbody> 

                        
                        <tbody>
                        <tr>
                            <Link to={'/user-details'}><td className='pt-5 underline'>Ezekiel Zeke</td> </Link>
                            <td className='pt-5'>+2347038570548</td> 
                            <td className='pt-5'>zek@gmail.com</td> 
                            <td className='pt-5'>-- --</td> 
                            <details className="dropdown">
                                <summary className="m-1 btn bg-white hover:bg-zinc-50">
                                <p className='flex items-center gap-2 lg:text-xs text-xs cursor-pointer'><p className='text-lg'><MdArrowDropDown /></p>Select Action</p>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white  rounded-md mt-1 w-40">
                                    <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-red-500'>Ban</li>
                                    <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-green-600'>Reinstate</li>
                                </ul>
                            </details>
                        </tr>
                        </tbody> 

                    </table>


                    <h2 className='text-center pt-52'>Click on user to view more details</h2>
                </div>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            
                            <h3 className="font-bold text-sm">Action!</h3>
                            <p className="py-4 text-sm">Select an action to take on this user</p>

                            <div className='flex gap-3 m-auto'>
                                <button className='bg-green-300 py-2 px-7 text-xs rounded-md'>Reinstate</button>
                                <button className='bg-red-300 py-2 px-7 text-xs rounded-md'> Ban</button>
                            </div>
                        </div>
                    </dialog>
            </div>
        </div>
    </div>

  )
}

export default DashOverviewUserCompo