'use client'

import { useState, useEffect } from 'react';
import { Datacontext,Blogcontext} from "./datacontext"
import SidebarUser from "../components/dashboard/SidebarUser"
import HeaderUser from "../components/dashboard/HeaderUser"
import { getPosts } from './dbcrud';


const dashboardLayout = ({ children }) => {

  const [objdata, setObjdata] = useState([]);
  const [blogdata, setBlogdata] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getPosts(setObjdata,setLoading);
  }, []); // Run only once (optional)



  return (
    <Datacontext.Provider value={{ objdata,setObjdata, loading }} >
        <Blogcontext.Provider value={{ blogdata, setBlogdata, loading }} >
        <section>
          <HeaderUser />
          <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 dash-content-padding-top" aria-label="Sidebar">
            <SidebarUser />
          </aside>
          <div className="p-4 sm:ml-64 dash-content-top">{children}</div>
        </section>
        </Blogcontext.Provider>
    </Datacontext.Provider>
  )
}

export default dashboardLayout
