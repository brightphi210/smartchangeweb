import React, { useState } from 'react'
import image from '../Components/images/loginImage.png'
import logo from '../Components/images/logo.png'
import { BASE_URL } from '../Context/baseUrl'


import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const LoginCom = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState('')


  const handleShow = () => {
    setShow(!show)
  }


  const url = `${BASE_URL}api/v1/admin/auth/login`
  const handleLogin = async (e) => {

    e.preventDefault();
    setIsLoading(true)
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },

            body : JSON.stringify({
                email,
                password,
            })
            
        })

        if(res.ok){
          const data = await res.json();
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data))
          navigate('/')
          
        }

    } catch (error) {
        console.log(error);
    }
}
  return (
    <div>

      <div className='lg:flex lg:p-52 lg:py-32 lg:items-center flex py-20 px-5'>
          <div className='lg:w-full lg:block hidden'>
            <img src={image} alt="" className='w-full'/>
          </div>


          <form action="" className='w-full' onSubmit={handleLogin}>

            <div className='lg:mb-10 lg:w-10/12 w-full mb-10'>
            <Link to={'/dashboard'}><img src={logo} alt="" className='w-40 text-center flex m-auto'/></Link>
              <h2 className='text-center lg:pt-5 pt-5'>SmartChange Admin Dashbord</h2>
            </div>

            <label className="input input-bordered lg:w-10/12 w-full flex h-12 items-center gap-2 mb-9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="email" 
                className="grow w-1/2 text-xs" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </label>



            <div className='relative'>
              <label className="input input-bordered lg:w-10/12 w-full flex h-12 items-center gap-2 mb-9">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input 
                  type={show === false ? 'password' : 'text'} 
                  className="grow w-1/2 text-xs" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  placeholder='password'
                />
              </label>

              <div onClick={handleShow} className='absolute lg:right-36 right-5 top-3 lg:top-3 text-2xl cursor-pointer'>
                  {show === false ? <p><IoEye /></p> : <p><FaEyeSlash/></p>}
              </div> 
              
            </div>

            <div className='flex items-center lg:w-10/12 w-full'>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox"  className="checkbox checkbox-warning w-5 h-5" />
                  <span className="label-text pl-5 text-xs">Remember me</span>
                </label>
              </div>

              <p className='ml-auto cursor-pointer text-xs'>Forgot Password</p>
            </div>

            <button className='bg-yellow-400 lg:w-10/12 w-full p-5 py-2 rounded-md mt-4 text-white'>
              {isLoading === true ? <span className="loading loading-spinner loading-sm"></span> : 'Submit'}</button>
        </form>
      </div>

    </div>
  )
}

export default LoginCom