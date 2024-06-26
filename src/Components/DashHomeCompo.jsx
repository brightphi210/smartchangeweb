import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import { BASE_URL } from '../Context/baseUrl';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };


  const labels = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week10', 'week11'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: '#FEB800',
      },
    //   {
    //     label: 'Dataset 2',
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
    //     backgroundColor: '#FDD15D',
    //   },
    ],
  };

const DashHomeCompo = () => {

  const url = `${BASE_URL}api/v1/admin/user_management/get/all_users`
  const [token, setToken] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
  const [usersCount, setUsersCount] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const getTotalUsers = async () =>{
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token.token}`,
        }
      })

      if(res.ok || res.statusCode === 200){
        const users = await res.json() 
        setUsersCount(users.users)
        setIsLoading(false)
      }

    } catch (error) {
      console.log('An Error occurred', error);
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getTotalUsers();
  }, [])

    
  return (
    <div className='lg:mx-10 bg-zinc-100 h-auto lg:px-10 lg:py-10 lg:mt-32  mb-10 lg:rounded-3xl rounded-xl p-5 mx-3 mt-44'>
        <h2 className='lg:text-sm text-xs'>Welcome back, Ezekiel</h2>


      {isLoading === true ? 

          <div className='flex justify-center items-center py-40'>
            <span className="loading loading-spinner loading-md text-orange-400"></span>        
          </div>
       : (
        <>
          <div className='lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 mt-5 pb-10 flex flex-col gap-3'>

              <div className='bg-white w-full p-8 rounded-xl'>
                  <div className='flex pb-5'>
                      <p className=' lg:text-xs text-xs'>Users</p>
                  </div>

                  <div className='flex items-baseline'>
                      <h2 className='lg:text-xl text-sm'>{usersCount.length}</h2>
                      <p className='ml-auto lg:text-xs text-xs text-orange-400 underline cursor-pointer'>View more</p>
                  </div>
              </div>

              <div className='bg-white w-full p-8 rounded-xl'>
                  <div className='flex pb-5'>
                      <p className=' lg:text-xs text-xs' >Signups</p>
                      
                      <select className='ml-auto lg:text-xs text-xs'>
                        <option value="" className=' lg:text-xs text-xs lg:p-3'>Daily</option>
                        <option value="" className=' lg:text-xs text-xs lg:p-3'>Weekly</option>
                        <option value="" className=' lg:text-xs text-xs lg:p-3'>Monthly</option>
                      </select>
                      
                  </div>

                  <div className='flex items-baseline'>
                      <h2 className='lg:text-xl text-sm'>146</h2>
                      <p className='ml-auto lg:text-xs text-xs  text-orange-400 underline cursor-pointer'>View more</p>
                  </div>
              </div>


              <div className='bg-white w-full p-8 rounded-xl'>
                  <div className='flex pb-5'>
                      <p className='lg:text-sm text-xs'>Transaction volume</p>
                  </div>

                  <div className='flex items-baseline'>
                      <h2 className='text-3xl'>-- --</h2>
                  </div>
              </div>


          </div>
          <Bar options={options} data={data} />
        </>
      )}
    </div>
  )
}

export default DashHomeCompo