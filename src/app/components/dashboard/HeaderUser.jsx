
'use client'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { signOut, useSession  } from 'next-auth/react';

const HeaderUser = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
      return <p>Loading...</p>;
    }
    if (session) {
    return (
        <>
            <Navbar fluid rounded className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{session.user.email}</span>
                            <span className="block truncate text-sm font-medium">UID: {session.user.uid}</span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={()=>signOut()}>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
            </Navbar>

        </>
    )}
}

export default HeaderUser
