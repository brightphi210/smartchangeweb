import React from 'react'

const SupaAdminCompo = () => {
  return (
    <div className='lg:mx-20 mt-5 bg-zinc-50 h-auto px-20 py-10  mb-10 rounded-3xl'>
        <div>

            <table className='lg:w-full'>
                <tr className='text-left bg-yellow-200'>
                    <th className='py-3 px-5 text-sm'>Sub admin</th>
                    <th className='py-3 px-5 text-sm'>Email address</th>
                    <th className='py-3 px-5 text-sm'>Phone number</th>
                    <th className='py-3 px-5 text-sm'>Action</th>
                </tr>
                <tr className='text-left border-b border-zinc-200 border-solid pb-10'>
                    <td className='py-5 lg:text-sm'>Ezekiel Emmanuelaudu</td>
                    <td className='py-5 lg:text-sm'>ekonduemmanuelaudu@gmail.com</td>
                    <td className='py-5 lg:text-sm'>+234703........0548</td>
                    <td className='py-5 lg:text-sm'>Select action</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default SupaAdminCompo