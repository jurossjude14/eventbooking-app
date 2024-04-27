"use client"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import CustomBlogList from '@/app/components/dashboard/CustomBlogList';
import BannerctaUser from '@/app/components/dashboard/BannerctaUser';

const blog = () => {

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });


  if (status === "loading") {
    return "Loading Blog"
  }
  if (session) {
    const suid = session.user.uid;

    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 mb-4 mt-3">
            <div className="col-span-12 border border-gray-200 rounded-lg shadow-sm p-5">
              <CustomBlogList sessionid={suid}/>
            </div>
          </div>
        </div>
      </div>
    )

    function Loading() {
      return <h2>🌀 Loading...</h2>;
    }
    
  }

}

blog.requireAuth = true
export default blog
