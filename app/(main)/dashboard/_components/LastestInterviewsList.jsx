"use client"
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import React, { useState } from 'react'

function LatestInterviewsList() {
  const [interviewList, setInterviewList] = useState([]);
  return (
    <div className='m-5'>
      <h2 className='font-bold text-2xl '>Previously Interviews</h2>
      {interviewList.length === 0&& 
      <div className='p-5 flex-col gap-3 items-center mt-5 justify-center flex border-2 border-dashed border-gray-300 rounded-xl'>
        <Video className='h-10 w-10 text-primary' />
        <h2 className='font-bold text-lg'>You don't have any interview created!!</h2>
        <Button>Create New Interview</Button>
      </div>}
    </div>
  )
}

export default LatestInterviewsList