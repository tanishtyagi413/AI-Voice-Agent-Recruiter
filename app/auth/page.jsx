"use client"
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'

function Login() {
  /*
  This function handles the sign-in process with Google using Supabase's OAuth.
  */
  const signWithGoogle =async () => {
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      console.error('Error signing in with Google:', error.message);
    } else {
      console.log('Sign in successful');
    }
  }
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image
          src={'/logo.png'}
          alt='Logo Image'
          width={400}
          height={100}
          className='w-[180px]'
          />
          <div className='flex flex-col items-center'>
            <Image
              src={'/login.png'}
              alt='Login Image'
              width={600}
              height={400}
              className='w-[400px] h-[250x] rounded-2xl'/>
              <h2 className='text-2xl font-bold text-center mt-5'>Welcome To AiRecuriter</h2>
              <p className='text-gray-500 text-center'>SignIn With Google</p>
              <Button className='bg-blue-500 text-white px-4 py-2 rounded mt-7 w-full hover:bg-blue-600 transition duration-300'
              onClick={signWithGoogle}>
                Sign In with Google
              </Button>
          </div>
      </div>
    </div>
  )
}

export default Login

