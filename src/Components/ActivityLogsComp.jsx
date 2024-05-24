import React, { useEffect, useState } from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";
import { BASE_URL } from '../Context/baseUrl';

const ActivityLogsComp = () => {

  const [token, setToken] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)


  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `${BASE_URL}api/v1/admin/auth/get/log`


  const getActivityLogs = async () =>{
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token.token}`,
        }
      })

      if(res.ok || res.statusCode === 200){
        const logs = await res.json() 
        setLogs(logs.activities)
        setIsLoading(false)
      }

    } catch (error) {
      console.log('An Error occurred', error);
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getActivityLogs();
}, [])




console.log(logs);
  return (
    <div className='lg:mx-10 lg:mt-32 mt-44 bg-zinc-100 h-auto lg:px-10 mx-3 px-4 py-10  mb-10 lg:rounded-xl rounded-lg'>
    <div>
        <h2 className='pb-5 font-semibold lg:text-lg text-sm'>Activity Log</h2>


        <div className='lg:w-full '>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                      <tr className='bg-yellow-300 mb-10'>
                          {/* <th></th>  */}
                          <th>Sub Admin</th> 
                          <th>Email address</th> 
                          <th>Merchant/User</th> 
                          <th>Action</th> 
                          <th>Created</th>
                          <th>Updated</th>
                      </tr>
                    </thead> 
                     
                     {logs.map((log, index)=> (
                      <tbody key={index}>
                        <tr>
                            {/* <th className='pt-5'><li></li></th>  */}
                            <td className='pt-5'>{log.admin.fullName}</td> 
                            <td className='pt-5'>{log.admin.email}</td> 
                            <td className='pt-5'>{log.admin.email}</td> 
                            <td className='pt-5'>{log.action}</td> 
                            <td className='pt-5'>{log.createdAt}</td> 
                            <td className='pt-5'>{log.updatedAt}</td> 
                        </tr>
                      </tbody> 
                     ))}
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default ActivityLogsComp