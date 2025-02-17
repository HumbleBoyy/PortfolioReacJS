import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './loyout.scss'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>
                &lt;body&gt; <br/>
                &lt;humble_boyy&gt;
            </span>
            <Outlet/>
            <span className='tags bottom-tags'>
               &lt;/body&gt;
               <br/>
               <span className='bottm-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    </>
  )
}

export default Layout
