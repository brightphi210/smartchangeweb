import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import prof from './images/ss.jpg'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdCall } from "react-icons/md";

import { useState, useEffect } from 'react';
import { BASE_URL } from '../Context/baseUrl';

const MerchantsDetailsCompo = () => {

  const {id} = useParams()

  const url =`${BASE_URL}api/v1/admin/merchant_management/get/${id}`
  const url2 =`${BASE_URL}api/v1/admin/merchant_management/ban/${id}`
  const url3 =`${BASE_URL}api/v1/admin/merchant_management/reinstate/${id}`
  const url4 =`${BASE_URL}api/v1/admin/merchant_management/approve/${id}`
  const url5 =`${BASE_URL}api/v1/admin/merchant_management/decline/${id}`


  

  const [token, setToken] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
    const [eachUser, setEachUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

  
    // console.log(token.token)
  
    const getSingleUser = async () =>{
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token.token}`,
          }
        })
  
        if(res.ok || res.statusCode === 200){
          const user = await res.json() 
          setEachUser(user.merchant)
          setIsLoading(false)
        }
  
      } catch (error) {
        console.log('An Error occurred', error);
        setIsLoading(false)
      }
    }
  
  
    useEffect(() => {
      getSingleUser();
    }, [])



    // ================== BAN MERCHANT =======================
    const banSingleUser = async () =>{
      setIsLoading(true)
      try {
        const res = await fetch(url2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token.token}`,
          }
        })
  
        if(res.ok || res.statusCode === 200){
          const result = await res.json() 
          setIsLoading(false)
          console.log(result);
          navigate('/merchant-overview')
        }
  
      } catch (error) {
        console.log('An Error occurred', error);
        setIsLoading(false)
      }
    }


    const navigate = useNavigate()


    // ================ REINSTATE MERCHANT ==================
    const reinstateSingleUser = async () =>{
      setIsLoading(true)
      try {
        const res = await fetch(url3, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token.token}`,
          }
        })
  
        if(res.ok || res.statusCode === 200){
          const result = await res.json() 
          setIsLoading(false)
          console.log(result);
          navigate('/merchant-overview')
        }
  
      } catch (error) {
        console.log('An Error occurred', error);
        setIsLoading(false)
      }
    }



    // ================ APPROVE MERCHANT ==================
    const approveMerchants = async (e) =>{
      e.preventDefault();
      setIsLoading(true)
      try {
        const res = await fetch(url4, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token.token}`,
          }
        })
  
        if(res.ok || res.statusCode === 200){
          const result = await res.json() 
          setIsLoading(false)
          console.log(result);
          console.log(eachUser.verified);
          navigate('/merchant-overview')
        }
  
      } catch (error) {
        console.log('An Error occurred', error);
        setIsLoading(false)
      }
    }




      // ================ APPROVE MERCHANT ==================
    const declineMerchants = async (e) =>{
      e.preventDefault();
      setIsLoading(true)
      try {
        const res = await fetch(url5, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token.token}`,
          }
        })
  
        if(res.ok || res.statusCode === 200){
          const result = await res.json() 
          setIsLoading(false)
          console.log(result);
          console.log(eachUser.verified);
          navigate('/merchant-overview')
        }
  
      } catch (error) {
        console.log('An Error occurred', error);
        setIsLoading(false)
      }
    }
    console.log(eachUser);


  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-[35rem]  lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
    <div className=''>
        <div className='w-fit'>
        <Link to={'/merchant-overview'} >
          <h2 className='pb-5 font-semibold lg:text-lg text-sm flex gap-3 items-center cursor-pointer w-fit'><p><IoArrowBack /></p>Back</h2>
        </Link>
        </div>


        
        {isLoading === true ? (

          <div className='flex justify-center items-center py-40'>
              <span className="loading loading-spinner loading-md text-orange-400"></span>        
          </div>
          ) : (
            <div>
              <div className='flex items-start bg-white p-5 px-8 rounded-xl'>

                <div className=' flex items-center gap-10'>
                  <div className='rounded-full w-24 h-24 overflow-hidden bg-slate-300 flex items-center justify-center'>
                    {eachUser.profilePicture === null || eachUser.profilePicture === '' ? <p className='text-xs'>No Pics</p> : 
                    <img src={eachUser.profilePicture} alt="" className='rounded-full w-24'/>
                  }
                  </div>

                  <div>
                    <h3>{eachUser.firstName} {eachUser.lastName}</h3>
                    <p className='lg:text-xs text-xs flex gap-3 items-center py-3'><p className='text-md bg-zinc-200 flex justify-center items-center p-2 rounded-full'>
                      <MdOutlineMarkEmailUnread /></p>{eachUser.email}</p>
                    <p className='lg:text-xs text-xs flex gap-3 items-center'><p className='text-md bg-zinc-200 flex justify-center items-center p-2 rounded-full'>
                      <MdCall /></p> {eachUser.phoneNo}</p>
                  </div>
                </div>


                <div className='ml-auto'>
                  {eachUser.documentVerified === false ? (<>
                      <button className="py-3 px-5 bg-red-500 text-white text-xs rounded-lg" onClick={()=>document.getElementById('my_modal_3').showModal()}>KYC Verification</button>
                    </>) :(

                    <details className="dropdown">
                      <summary className="m-1 btn bg-zinc-100 hover:bg-zinc-50">
                        <p className='flex items-center gap-2 lg:text-xs text-xs cursor-pointer'><p className='text-lg'><MdArrowDropDown /></p>Select Action</p>
                      </summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-white  rounded-md mt-2 w-40">
                        <li onClick={banSingleUser} className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-red-500'>Ban</li>
                        <li onClick={reinstateSingleUser} className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-green-600'>Reinstate</li>
                      </ul>
                    </details>
                  )}
                </div>
              </div>


                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box max-w-[25rem] p-10">
                      <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      
                      <h3 className="font-bold text-sm text-center">Action!</h3>
                      <p className="py-8 text-xs text-center">Kindly approve or decline the <br /> merchant’s KYC verification.</p>

                      <div className='flex gap-3 m-auto justify-center'>
                          <button className='bg-green-500 text-white py-2 px-7 text-xs rounded-md' onClick={approveMerchants}>Approve</button>
                          <button className='bg-red-500 text-white py-2 px-7 text-xs rounded-md' onClick={declineMerchants}> Decline</button>
                      </div>
                  </div>
                </dialog>

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
          )}
    </div>
</div>
  )
}

export default MerchantsDetailsCompo