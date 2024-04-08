import React from 'react'

const DashOverviewMerchantCompo = () => {
  return (
    <div className='lg:mx-20 mt-5 bg-zinc-50 h-auto px-20 py-10  mb-10 rounded-3xl'>
        <div>
            <h2 className='pb-5'>Overview - Merchant</h2>


            <table className='lg:w-full'>
                <tr className='text-left bg-yellow-200'>
                    <th className='py-3 px-5 text-sm'>Username</th>
                    <th className='py-3 px-5 text-sm'>Phone number</th>
                    <th className='py-3 px-5 text-sm'>Email address</th>
                    <th className='py-3 px-5 text-sm'>Transaction Volume</th>
                    <th className='py-3 px-5 text-sm'>Action</th>
                </tr>
                <tr className='text-left border-b border-zinc-200 border-solid pb-10'>
                    <td className='py-5 lg:text-sm'>User0111042233</td>
                    <td className='py-5 lg:text-sm'>ekondu.........@gmail.com</td>
                    <td className='py-5 lg:text-sm'>+2347038570548</td>
                    <td className='py-5 lg:text-sm'>-- --</td>
                    <td className='py-5 lg:text-sm'>+Select action</td>
                </tr>
            </table>
        </div>
    </div>





  )
}

export default DashOverviewMerchantCompo