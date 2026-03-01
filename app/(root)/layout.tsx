import React from 'react'
import Navbar from '@/modules/home/components/navbar'
import { currentUserRole } from '@/modules/auth/actions'

const RootLayout = async ({children}) => {
  const userRole = await currentUserRole();
  return (
    <main className=' flex flex-col min-h-screen max-h-screen ' >
        <Navbar userRole={userRole} />
        <div className=' flex-1 flex flex-col px-3 pb-4 ' >
            {children}
        </div>
    </main>
  )
}

export default RootLayout