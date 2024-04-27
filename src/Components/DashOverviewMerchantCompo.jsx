import React from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const DashOverviewMerchantCompo = () => {
  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-[35rem] overflow-y-scroll lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
        <div>
            <h2 className='pb-5 font-semibold lg:text-lg text-sm'>Overview - Merchant</h2>


            <div className='lg:w-full '>

                <div className="">
                    <table className="table table-xs">
                        <thead>
                        <tr className='bg-yellow-300 mb-10'>
                            <th></th> 
                            <th>Name</th> 
                            <th>Phone number</th> 
                            <th>Email address</th> 
                            <th>Transaction Volume</th> 
                            <th>Action</th> 
                        </tr>
                        </thead> 
                        
                        <tbody>
                        <tr>
                            <th className='pt-5'>1</th> 
                           
                            <Link to={'/merchant-details'}><td className='pt-5 underline'>Ezekiel Zeke</td> </Link>
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
                            <th className='pt-5'>1</th> 
                            <td className='pt-5'>Ezekiel Zeke</td> 
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
                            <th className='pt-5'>1</th> 
                            <td className='pt-5'>Ezekiel Zeke</td> 
                            <td className='pt-5'>+2347038570548</td> 
                            <td className='pt-5'>zek@gmail.com</td> 
                            <td className='pt-5'>-- --</td> 
                            <td className='flex items-center cursor-pointer pt-5 text-red-500' onClick={()=>document.getElementById('my_modal_3').showModal()}>KYC Verification</td> 
                        </tr>
                        </tbody> 
                    </table>

                    <h2 className='text-center pt-52'>Click on user to view more details</h2>
                </div>

                <dialog id="my_modal_3" className="modal ">
                    <div className="modal-box h-[15rem] justify-center items-center">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        
                        <h3 className="font-bold text-sm text-center pt-5">Action!</h3>
                        <p className="py-6 text-sm text-center">Kindly approve or decline the <br /> merchant’s KYC verification.</p>

                        <div className='flex gap-3 m-auto justify-center'>
                            <button className='bg-green-500 text-white py-2 px-7 text-xs rounded-md'>Reinstate</button>
                            <button className='bg-red-500 text-white py-2 px-7 text-xs rounded-md'> Ban</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </div>




  )
}

export default DashOverviewMerchantCompo