import React from 'react'

const TransactionHistoryCompo = () => {
  return (
    <div className='lg:mx-20 mt-5 bg-zinc-50 h-auto px-20 py-10  mb-10 rounded-3xl'>
        <div>
            <h2 className='pb-5 font-semibold'>Transaction History</h2>


            <table className='lg:w-full'>
                <tr className='text-left bg-yellow-200'>
                    <th className='py-3 px-5 text-sm'>Username</th>
                    <th className='py-3 px-5 text-sm'>Merchant name</th>
                    <th className='py-3 px-5 text-sm'>Time/Date</th>
                    <th className='py-3 px-5 text-sm'>Trade</th>
                    <th className='py-3 px-5 text-sm'></th>
                </tr>
                <tr className='text-left border-b border-zinc-200 border-solid pb-10'>
                    <td className='py-5 lg:text-sm'>User0111042233</td>
                    <td className='py-5 lg:text-sm'>Ezekiel Emmanuelaudu</td>
                    <td className='py-5 lg:text-sm'>22:12 // April 2, 2024</td>
                    <td className='py-5 lg:text-sm'>250 ALGO</td>
                    <td className='py-5 lg:text-sm text-yellow-400 cursor-pointer'>View more</td>
                </tr>

                <tr className='text-left border-b border-zinc-200 border-solid pb-10'>
                    <td className='py-5 lg:text-sm'>User0111042233</td>
                    <td className='py-5 lg:text-sm'>Ezekiel Emmanuelaudu</td>
                    <td className='py-5 lg:text-sm'>22:12 // April 2, 2024</td>
                    <td className='py-5 lg:text-sm'>250 ALGO</td>
                    <td className='py-5 lg:text-sm text-yellow-400 cursor-pointer'>View more</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default TransactionHistoryCompo