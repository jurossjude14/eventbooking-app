"use client"
import { Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import TableUser from '@/app/components/dashboard/TableUser';
import FormBookUser from '@/app/components/dashboard/FormBookUser';
import BannerctaUser from '@/app/components/dashboard/BannerctaUser';

const bookevent = () => {

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });


  if (status === "loading") {
    return "Loading Booking"
  }
  if (session) {
    const suid = session.user.uid;
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container">
          <div className="grid grid-cols-8 gap-4 mb-4 mt-3">
            <div className="col-span-2  border border-gray-200 rounded-lg shadow-sm p-5">
            <FormBookUser sessionuid={suid} />
            </div>
            <div className="col-span-6 border border-gray-200 rounded-lg shadow-sm p-5">
            <TableUser sessionuid={suid}  />        
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <BannerctaUser />
          </div>
        </div>
      </div>
    )
    
  }

}

bookevent.requireAuth = true
export default bookevent
