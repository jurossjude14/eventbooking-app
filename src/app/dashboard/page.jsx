"use client"
import { Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import TableUser from '../components/dashboard/TableUser';
import TimelineUser from '../components/dashboard/TimelineUser';
import AccordionUser from '../components/dashboard/AccordionUser';
import BannerctaUser from '../components/dashboard/BannerctaUser';

const dashboard = () => {

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  const heading = {
    title: "This is Dashboard",
    description: "This Will be Built Soon",
  }

  if (status === "loading") {
    return "Loading or not authenticated..."
  }
  if (session) {
    const suid = session.user.uid;

    function Loading() {
      return <h2>🌀 Loading...</h2>;
    }


    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container">
          <div className="grid grid-cols-5 gap-4 mb-4 mt-3">
            <div className="col-span-2  border border-gray-200 rounded-lg shadow-sm p-5">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 border-b border-gray-200 mb-5">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Simple General Booking</h3>
                  <p className="mt-2 text-lg leading-8 text-gray-600">Any Event Reservation App</p>
                </div>
              </div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 custom-sec-div1">
                <p>We are web developer with over 5 years of Wordpress experience and passion for responsive website design and a problem solver to innovate new ideas that can create great website.</p>
              </div>
            </div>
            <div className="col-span-3 border border-gray-200 rounded-lg shadow-sm p-5 mb-5">
              <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Serving Priority Today 🚀 </h3>
                </div>
              <Suspense fallback={<Loading />}>
                <TimelineUser sessionuid={suid} />
              </Suspense>
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

dashboard.requireAuth = true
export default dashboard
