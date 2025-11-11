"use client"

import { useUser } from '@/app/provider';
import React from 'react'
import Image from 'next/image'

function WelcomeContainer() {
    const { user } = useUser();
    return (
        <div className='bg-gray-200 p-5 rounded-xl flex items-center justify-between m-5'>
            <div>
                <h2 className='text-lg font-bold'>Welcome Back, {user?.name}</h2>
                <h2 className='text-gray-500'>AI-Driven Interviews, Hasssle-free Hiring</h2>
            </div>
            {user && (
                <Image
                    src={user?.picture || user?.photo_url || '/logo.png'}
                    width={40}
                    height={40}
                    alt="userAvatar"
                    className='rounded-full'
                />
            )}
        </div>
    )
}

export default WelcomeContainer
