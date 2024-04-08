import React from 'react'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import TransactionHistoryCompo from '../Components/TransactionHistoryCompo'

const TransactionHistory = () => {
  return (
    <div className='flex w-full'>
        <SideBar />

        <div className='w-full pl-72'>
            <Navbar />
            <TransactionHistoryCompo />
        </div>
    </div>
  )
}

export default TransactionHistory