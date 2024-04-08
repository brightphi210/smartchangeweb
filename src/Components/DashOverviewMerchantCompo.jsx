import React from 'react'

const DashOverviewMerchantCompo = () => {
  return (
    <div className='lg:mx-20 lg:mt-32 mt-44 bg-zinc-100 h-auto lg:px-20 mx-3 px-4 py-10  mb-10 lg:rounded-3xl rounded-lg'>
        <div>
            <h2 className='pb-5 font-semibold lg:text-lg text-sm'>Transaction History</h2>


            <div className='lg:w-full '>
                <ul className='text-left bg-yellow-200 lg:flex lg:justify-between grid grid-cols-2 p-3 gap-3 rounded-lg'>
                    <li className='lg:text-sm text-xs'>Username</li>
                    <li className='lg:text-sm text-xs'>Merchant name</li>
                    <li className='lg:text-sm text-xs'>Time/Date</li>
                    <li className='lg:text-sm text-xs'>Trade</li>
                    <li className='lg:text-sm text-xs'></li>
                </ul>
                <ul className='text-left border-b border-zinc-200 border-solid lg:pt-5 lg:pb-10 lg:flex lg:justify-between grid grid-cols-2 gap-3 py-5'>
                    <li className='lg:text-sm text-xs col-span-1'>User0111042233</li>
                    <li className='lg:text-sm text-xs col-span-1'>Ezekiel Emmanuelaudu</li>
                    <li className='lg:text-sm text-xs col-span-1'>22:12 // April 2, 2024</li>
                    <li className='lg:text-sm text-xs col-span-1'>250 ALGO</li>
                    <li className='lg:text-sm text-xs text-yellow-400 cursor-pointer'>View more</li>
                </ul>
            </div>
        </div>
    </div>




  )
}

export default DashOverviewMerchantCompo