import React from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownFill } from "react-icons/ri";


const SupaAdminCompo = () => {
  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-auto lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
        <div>

        <div className='lg:w-full '>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                    <tr className='bg-yellow-300 mb-10'>
                        <th></th> 
                        <th>Sub admin</th> 
                        <th>Email address</th> 
                        <th>Phone number</th> 
                        <th>Action</th> 
                    </tr>
                    </thead> 
                    
                    <tbody>
                        <tr>
                            <th className='pt-5'>1</th> 
                            <td className='pt-5'>Ezekiel Emmanuelaudu</td> 
                            <td className='pt-5'>ekon...@gmail.com</td> 
                            <td className='pt-5'>+234703...0548</td> 
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
                            <th className='pt-5'>1</th> 
                            <td className='pt-5'>Ezekiel Emmanuelaudu</td> 
                            <td className='pt-5'>ekon...@gmail.com</td> 
                            <td className='pt-5'>+234703...0548</td> 
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


                <button className='flex m-auto text-center mt-40 text-xs bg-yellow-500 text-white p-3 px-6 rounded-lg ' onClick={()=>document.getElementById('my_modal_4').showModal()}>Create Admin</button>
                
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


                
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        
                        <h3 className="font-bold text-sm">Input Details!</h3>

                        <form action="" className='pt-5'>
                            <input type="text" placeholder="First name" className="input input-bordered w-full mb-3 text-xs " />
                            <input type="text" placeholder="Last name" className="input input-bordered w-full mb-3 text-xs " />
                            <input type="text" placeholder="Email Address" className="input input-bordered w-full mb-3 text-xs " />
                        </form>

                        <button className='flex m-auto text-center justify-center mt-5 text-xs bg-yellow-500 text-white p-3 px-6 rounded-lg w-full ' onClick={()=>document.getElementById('my_modal_4').showModal()}>Create Admin</button>
                    </div>
                </dialog>
            </div>
        </div>
    </div>
  )
}

export default SupaAdminCompo