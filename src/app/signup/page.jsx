"use client"

import dynamic from 'next/dynamic'
 
const Signup = dynamic(() => import('../components/Signup'), { ssr: false })

const signuppage  = () => {
  return (
    <div>
      <Signup />
    </div>
  )
}

export default signuppage 
