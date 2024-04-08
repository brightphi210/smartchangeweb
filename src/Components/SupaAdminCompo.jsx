import React from 'react'

const SupaAdminCompo = () => {
  return (
    <div className='lg:mx-20 lg:mt-32 mt-44 bg-zinc-100 h-auto lg:px-20 mx-3 px-4 py-10  mb-10 lg:rounded-3xl rounded-lg'>
        <div>

            <div className='lg:w-full '>
                <ul className='text-left bg-yellow-400 lg:flex lg:justify-between grid grid-cols-2 p-3 gap-3 rounded-lg'>
                    <li className='lg:text-sm text-xs'>Sub admin</li>
                    <li className='lg:text-sm text-xs'>Email address</li>
                    <li className='lg:text-sm text-xs'>Phone number</li>
                    <li className='lg:text-sm text-xs'>Action</li>
                </ul>
                <ul className='text-left border-b border-zinc-200 border-solid lg:pt-5 lg:pb-10 lg:flex lg:justify-between grid grid-cols-2 gap-3 py-5'>
                    <li className='lg:text-sm text-xs col-span-1'>Ezekiel Emmanuelaudu</li>
                    <li className='lg:text-sm text-xs col-span-1'>ekonduemmanuelaudu@gmail.com</li>
                    <li className='lg:text-sm text-xs col-span-1'>+234703........0548</li>
                    <li className='lg:text-sm text-xs col-span-1'>Select action</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SupaAdminCompo