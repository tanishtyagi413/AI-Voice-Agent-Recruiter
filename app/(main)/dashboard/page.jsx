import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreateOptions from './_components/CreateOptions'
import LastestInterviewsList from './_components/LastestInterviewsList'

function Dashboard() {
  return (
    <div>
      <WelcomeContainer />
      <h2 className='text-2xl font-bold m-5'>Dashbosrd</h2>
      <CreateOptions />
      <LastestInterviewsList />
    </div>
  )
}

export default Dashboard
