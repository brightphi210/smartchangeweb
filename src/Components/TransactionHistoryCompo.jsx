import React from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";



const TransactionHistoryCompo = () => {
  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-auto lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
        <div>
            <h2 className='pb-5 font-semibold lg:text-lg text-sm'>Transaction History</h2>


            <div className='lg:w-full '>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                        <tr className='bg-yellow-300 mb-10'>
                            <th></th> 
                            <th>User’s name</th> 
                            <th>Merchant name</th> 
                            <th>Time/Date</th> 
                            <th>Amout</th> 
                            <th></th>
                        </tr>
                        </thead> 
                         
                        <tbody>
                        <tr>
                            <th className='pt-5'>1</th> 
                            <td className='pt-5'>Idris Abubakar</td> 
                            <td className='pt-5'>Ezekiel Emmanuelaudu</td> 
                            <td className='pt-5'>22:12 // April 2, 2024</td> 
                            <td className='pt-5'>250 ALGO</td> 
                            <td className='flex items-center cursor-pointer pt-5 text-yellow-500' >View chat log<RiArrowDropDownFill className='text-lg'/></td> 
                        </tr>
                        </tbody> 


                        <tbody>
                        <tr>
                            <th className='pt-5'>1</th> 
                            <td className='pt-5'>Idris Abubakar</td> 
                            <td className='pt-5'>Ezekiel Emmanuelaudu</td> 
                            <td className='pt-5'>22:12 // April 2, 2024</td> 
                            <td className='pt-5'>250 ALGO</td> 
                            <td className='flex items-center cursor-pointer pt-5 text-yellow-500'>View chat log<RiArrowDropDownFill className='text-lg'/></td> 
                        </tr>
                        </tbody> 
                    </table>
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

export default TransactionHistoryCompo