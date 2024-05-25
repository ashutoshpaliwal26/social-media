
import Navbar from '@/components/common/navbar'
import Main from '@/components/common/main'
import Login from '@/components/auth/login'
import React from 'react'

const page = () => {

  if (typeof window === 'undefined') {
    return (<>
      <Login />
    </>)
  } else {
    return (<>
      <div className="fixed">
        <Navbar />

      </div>
      <div className='ml-60'>
        <Main />
      </div>

    </>)
  }
}

export default page