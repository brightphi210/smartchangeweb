import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import prof from './images/ss.jpg'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdCall } from "react-icons/md";

const MerchantsDetailsCompo = () => {
  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-[35rem]  lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
    <div className=''>
        <div className='w-fit'>
        <Link to={'/merchant-overview'} >
          <h2 className='pb-5 font-semibold lg:text-lg text-sm flex gap-3 items-center cursor-pointer w-fit'><p><IoArrowBack /></p>Back</h2>
        </Link>
        </div>


        <div className='flex items-start bg-white p-5 px-8 rounded-xl'>

          <div className=' flex items-center gap-10'>
            <div className='rounded-full'>
              <img src={prof} alt="" className='rounded-full w-24'/>
            </div>

            <div>
              <h3>Zeke Allen</h3>
              <p className='lg:text-xs text-xs flex gap-3 items-center py-3'><p className='text-md bg-zinc-200 flex justify-center items-center p-2 rounded-full'>
                <MdOutlineMarkEmailUnread /></p>ekonduemmanuelaudu@gmail.com</p>
              <p className='lg:text-xs text-xs flex gap-3 items-center'><p className='text-md bg-zinc-200 flex justify-center items-center p-2 rounded-full'>
                <MdCall /></p> +2347038570548</p>
            </div>
          </div>

          <div className='ml-auto'>
            
            <details className="dropdown">
              <summary className="m-1 btn bg-zinc-100 hover:bg-zinc-50">
              <p className='flex items-center gap-2 lg:text-xs text-xs cursor-pointer'><p className='text-lg'><MdArrowDropDown /></p>Select Action</p>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-white  rounded-md mt-2 w-40">
                <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-red-500'>Ban</li>
                <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-green-600'>Reinstate</li>
              </ul>
            </details>
          </div>
        </div>

        <div className='bg-white p-5 px-8 rounded-xl mt-4'>
          <h2 className='pb-5 font-semibold lg:text-lg text-sm'>Transaction History</h2>
          <table className="table table-xs">
              <thead>
              <tr className='bg-yellow-300 mb-10 -z-0'>
                  <th>User name</th> 
                  <th>Buying/Selling</th> 
                  <th>Time/Date</th> 
                  <th>Amount</th> 
                  <th></th> 
              </tr>
              </thead> 
                
              <tbody>
              <tr>
                  <td className='pt-5'>Ezekiel Zeke</td>
                  <td className='pt-5'>Selling</td> 
                  <td className='pt-5'>22:12 // April 2, 2024</td> 
                  <td className='pt-5'>250 ALGO</td> 
                  <Link to={'/user-details'}><td className='pt-5 underline text-orange-500'>View chat log</td> </Link>
              </tr>
            </tbody>


            <tbody>
              <tr>
                  <td className='pt-5'>Ezekiel Zeke</td>
                  <td className='pt-5'>Selling</td> 
                  <td className='pt-5'>22:12 // April 2, 2024</td> 
                  <td className='pt-5'>250 ALGO</td> 
                  <Link to={'/user-details'}><td className='pt-5 underline text-orange-500'>View chat log</td> </Link>
              </tr>
            </tbody>

          </table>
        </div>
    </div>
</div>
  )
}

export default MerchantsDetailsCompo