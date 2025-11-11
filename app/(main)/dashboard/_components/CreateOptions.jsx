import { Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateOptions() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-5 m-3'>
        <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-200 p-5 rounded-lg flex flex-col gap-3 cursor-pointer hover:shadow-md hover:border-gray-300 transition'
          >
          <Video className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
          <h2 className='font-bold'>Create New Interview</h2>
          <p className='text-gray-500'>Create AI interview and Schedule then with candidates</p>
        </Link>
         <div className='bg-white border border-gray-200 p-5 rounded-lg flex flex-col gap-3 cursor-pointer hover:shadow-md hover:border-gray-300 transition'>
          <Video className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
          <h2 className='font-bold'>Create Phone Screening Call</h2>
          <p className='text-gray-500'>Schedule Phone Screening call with Candidates</p>
        </div>
      </div>
    </div>
  )
}

export default CreateOptions
