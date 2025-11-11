import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect, useState } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { InterviewTypes } from '@/services/Constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function FormContainer({onHandleInputChhange, GoToNext}) {

    const [interviewType, setInterviewType] = useState([]);

    useEffect(()=>{
        if(interviewType){
            onHandleInputChhange('interviewType', interviewType)
        }
    },[interviewType])


    const AddInterviewType=(type)=>{
        const data=interviewType.includes(type);
        if(!data){
            setInterviewType(prev=>[...prev, type])
        }else{
            const result=interviewType.filter(item=>item !== type);
            setInterviewType(result)
        }
    
    }

  return (
    <div className='p-5 bg-white rounded-xl'>
        <div>
            <h2 className='text-sm font-medium'>Job Position</h2>
            <Input placeholder='Ex. Software Engineer' className='mt-2 mb-5'
            onChange={(e)=>onHandleInputChhange('jobPosition', e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Job Description</h2>
            <Textarea placeholder='Enter the Details and requirement of the Job' className='h-[200px] mt-2'
            onChange={(e)=>onHandleInputChhange('jobDescription', e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Interview Duration</h2>
            <Select onValueChange={(value)=>onHandleInputChhange('interviewDuration', value)}>
                <SelectTrigger className='w-full mt-2'>
                    <SelectValue placeholder='Select Duration' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='5'>5 Minutes</SelectItem>
                    <SelectItem value='10'>10 Minutes</SelectItem>
                    <SelectItem value='20'>20 Minutes</SelectItem>
                    <SelectItem value='30'>30 Minutes</SelectItem>
                    <SelectItem value='40'>40 Minutes</SelectItem>
                    <SelectItem value='50'>50 Minutes</SelectItem>
                    <SelectItem value='60'>60 Minutes</SelectItem>
                </SelectContent>
            </Select> 
        </div>
         <div className='mt-5'>
            <h2 className='text-sm font-medium'>Interview Type</h2>
            <div className='flex flex-wrap gap-3 mt-2'>
                {InterviewTypes.map((type, index)=>(
                    <div key={index} className={`flex items-center gap-2 mt-2 cursor-pointer border p-1 px-2 rounded-2xl bg-blue-50 hover:bg-gray-50
                        ${interviewType.includes(type.title) ? 'border-blue-500 text-primary bg-blue-100': 'border-transparent'}`}
                    onClick={()=> AddInterviewType(type.title)
                    }
                    >
                        <type.icon className='h-4 w-4'/>
                        <span>{type.title}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-7 flex justify-end' onClick={()=>GoToNext()}>
            <Button>Generate Question <ArrowRight /></Button>
        </div>
    </div>
  )
}

export default FormContainer