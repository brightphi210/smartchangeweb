import React from 'react'
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


    
  return (
    <div className='lg:mx-20 bg-zinc-50 h-auto lg:px-20 lg:py-10 lg:mt-32  mb-10 lg:rounded-3xl round-2xl p-5 mx-3 mt-40'>
        <h2>Welcome back, Ezekiel</h2>

        <div className='lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 mt-5 pb-10 flex flex-col gap-3'>

            <div className='bg-white w-full p-8 rounded-xl'>
                <div className='flex pb-5'>
                    <p className=' text-sm'>Users</p>
                    <p className='ml-auto text-sm'>All</p>
                </div>

                <div className='flex items-baseline'>
                    <h2 className='text-3xl'>146</h2>
                    <p className='ml-auto text-sm text-orange-400 underline cursor-pointer'>View more</p>
                </div>
            </div>

            <div className='bg-white w-full p-8 rounded-xl'>
                <div className='flex pb-5'>
                    <p className=' text-sm'>Signups</p>
                    <p className='ml-auto text-sm'>Daily</p>
                </div>

                <div className='flex items-baseline'>
                    <h2 className='text-3xl'>146</h2>
                    <p className='ml-auto text-sm text-orange-400 underline cursor-pointer'>View more</p>
                </div>
            </div>


            <div className='bg-white w-full p-8 rounded-xl'>
                <div className='flex pb-5'>
                    <p className=' text-sm'>Transaction volume</p>
                </div>

                <div className='flex items-baseline'>
                    <h2 className='text-3xl'>-- --</h2>
                </div>
            </div>


        </div>


        <Bar options={options} data={data} />
    </div>
  )
}

export default DashHomeCompo