import React from 'react'

const TransactionHistoryCompo = () => {
  return (
    <div className='lg:mx-20 lg:mt-32 mt-44 bg-zinc-50 h-auto lg:px-20 mx-3 px-4 py-10  mb-10 rounded-3xl'>
        <div>
            <h2 className='pb-5 font-semibold'>Transaction History</h2>


            <table className='lg:w-full block'>
                <tr className='text-left bg-yellow-200'>
                    <th className='py-3 px-5 lg:text-sm text-xs'>Username</th>
                    <th className='py-3 px-5 lg:text-sm text-xs'>Merchant name</th>
                    <th className='py-3 px-5 lg:text-sm text-xs'>Time/Date</th>
                    <th className='py-3 px-5 lg:text-sm text-xs'>Trade</th>
                    <th className='py-3 px-5 lg:text-sm text-xs'></th>
                </tr>
                <tr className='text-left border-b border-zinc-200 border-solid pb-10'>
                    <td className='py-5 lg:text-sm text-xs'>User0111042233</td>
                    <td className='py-5 lg:text-sm text-xs'>Ezekiel Emmanuelaudu</td>
                    <td className='py-5 lg:text-sm text-xs'>22:12 // April 2, 2024</td>
                    <td className='py-5 lg:text-sm text-xs'>250 ALGO</td>
                    <td className='py-5 lg:text-sm text-xs text-yellow-400 cursor-pointer'>View more</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default TransactionHistoryCompo