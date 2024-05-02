import React from 'react'
import image from '../Components/images/loginImage.png'
import logo from '../Components/images/logo.png'

const LoginCom = () => {
  return (
    <div>

      <div className='flex p-52 py-32 items-center'>
          <div className='w-full'>
            <img src={image} alt="" className='w-full'/>
          </div>


          <form action="" className='w-full'>

            <div className='mb-10 w-10/12'>
              <img src={logo} alt="" className='w-40 text-center flex m-auto'/>
              <h2 className='text-center pt-5'>SmartChange Admin Dashbord</h2>
            </div>

            <label className="input input-bordered w-10/12 flex h-12 items-center gap-2 mb-9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="email" className="grow w-1/2" placeholder="Email"/>
            </label>


            <label className="input input-bordered w-10/12 flex h-12 items-center gap-2 mb-9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input type="password" className="grow w-1/2" value="password"/>
            </label>

            <div className='flex items-center w-10/12'>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox"  className="checkbox checkbox-warning w-5 h-5" />
                  <span className="label-text pl-5 text-xs">Remember me</span>
                </label>
              </div>

              <p className='ml-auto cursor-pointer text-xs'>Forgot Password</p>
            </div>

            <button className='bg-yellow-400 w-10/12 p-5 py-2 rounded-md mt-4 text-white'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default LoginCom