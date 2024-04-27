import React from 'react'

import dynamic from 'next/dynamic'
 
const Signin = dynamic(() => import('../components/Signin'), { ssr: false })

const signinpage  = () => {
  return (
    <div>
      <Signin />
    </div>
  )
}

export default signinpage 
