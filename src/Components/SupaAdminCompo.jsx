import React, { useEffect, useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownFill } from "react-icons/ri";
import { BASE_URL } from '../Context/baseUrl';
import success from './images/success.png'
import { Link } from 'react-router-dom';


const SupaAdminCompo = () => {

    

    const url = `${BASE_URL}api/v1/admin/auth/create_sub_admin`
    const [token, setToken] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')


    const handleChangeName = (e) =>{
        setFullName(e.target.value)
    }


    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    

    console.log(fullName, email, password);

    const createAdmin = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('password', password);

    
        setIsLoading(true)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token.token}`,
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    email: email,
                    fullName : fullName,
                    password : password
                })
            })


            if (response.ok || response.status === 201) {
                const data = await response.json();
                document.getElementById('my_modal_4').close();
                document.getElementById('my_modal_3').showModal();
                setMessage(data.message)
                // setFullName('');
                setEmail('');
                setPassword('');
                console.log(data)
            } else {
                console.error('This is an error');
            }
            setIsLoading(false)

        } catch (error) {
            console.log(error);
        }
    }


    const url2 = `${BASE_URL}api/v1/admin/auth/get/admins/all`
    const [allAdmins, setAllAdmins] = useState([])

    const getAllAdmins = async () =>{
        setIsLoading(true)
        try {
          const res = await fetch(url2, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${token.token}`,
            }
          })
    
          if(res.ok || res.statusCode === 200){
            const admins = await res.json() 
            setAllAdmins(admins.admins)
            console.log(admins.admins);
            setIsLoading(false)
          }
    
        } catch (error) {
          console.log('An Error occurred', error);
          setIsLoading(false)
        }
    }


    useEffect(()=>{
        getAllAdmins()
    },[])




  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-auto lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
        <div>


            <div className='lg:w-full '>




                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                        <tr className='bg-yellow-300 mb-10'>
                            <th>Sub admin</th> 
                            <th>Email address</th> 
                            <th>Role</th> 
                            <th>Action</th> 
                        </tr>
                        </thead> 

                        {allAdmins.map((admin)=>(
                            <tbody>
                                <tr>
                                    <td className='pt-5'>{admin.fullName}</td> 
                                    <td className='pt-5'>{admin.email}</td> 
                                    <td className='pt-5'>{admin.role}</td> 
                                                    <details className="dropdown">
                                        <summary className="m-1 btn bg-white hover:bg-zinc-50">
                                        <p className='flex items-center gap-2 lg:text-xs text-xs cursor-pointer'><p className='text-lg'><MdArrowDropDown /></p>Select Action</p>
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-white  rounded-md mt-1 w-40">
                                            <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-red-500'>Ban</li>
                                            <li className='hover:bg-zinc-100 p-4 rounded-md cursor-pointer text-green-600'>Reinstate</li>
                                        </ul>
                                    </details>
                                </tr>
                            </tbody> 
                        ))}
                    </table>


                    {isLoading === true && (
                        <div className='flex justify-center m-auto items-center py-40 pb-0'>
                            <span className="loading loading-spinner loading-md text-orange-400"></span>        
                        </div>
                    )}


                    <button className='flex m-auto text-center mt-40 text-xs bg-yellow-500 text-white p-3 px-6 rounded-lg ' onClick={()=>document.getElementById('my_modal_4').showModal()}>Create Admin</button>
                    
                </div>
            
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        
                        <h3 className="font-bold text-sm">Create Sub Admin</h3>

                        <form action="" className='pt-5' onSubmit={createAdmin}>


                                <input 
                                    type="text" 
                                    placeholder="Fullname" 
                                    className="input input-bordered w-full mb-3 text-xs" 
                                    onChange={handleChangeName}
                                    value={fullName}
                                    required
                                />


                                <input 
                                    type="text" 
                                    placeholder="Email Address"  
                                    className="input input-bordered w-full mb-3 text-xs" 
                                    onChange={handleChangeEmail}
                                    value={email}
                                    required
                                />


                                <input 
                                    type="text" 
                                    placeholder="Password" 
                                    className="input input-bordered w-full mb-3 text-xs" 
                                    onChange={handleChangePassword}
                                    value={password}
                                    required
                                />

                                <button type='submit' className='flex m-auto text-center justify-center mt-5 text-xs bg-yellow-500 text-white p-3 px-6 rounded-lg w-full'>
                                    {isLoading ? 'Loading . . .' : 'Create Admin Now'}
                                </button>
                        </form>

                    </div>
                </dialog>

            
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <div className='w-full flex m-auto justify-center'>
                            <img src={success} alt="" className='w-20'/>
                        </div>

                        <div className='text-center pt-5'>
                            <h2>Congratulations</h2>
                            <p className='text-xs'>{fullName} has been successfully made an admin</p>

                            <Link to={'/'}>
                                <button className='bg-yellow-400 py-2 px-5 text-xs rounded-md text-white mt-4'>Back to Dashboard</button>
                            </Link>
                        </div>
                    </div>
                </dialog>

            
            </div>
        </div>
    </div>
  )
}

export default SupaAdminCompo