import React from 'react'
import Dashboardprovider from './provider'

function Dashboardlayout({children}) {
  return (
    <Dashboardprovider>
      <div className='p-5'>
        {children}
      </div>
      </Dashboardprovider>
  )
}

export default Dashboardlayout
