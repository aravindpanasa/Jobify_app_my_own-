import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, BigSidebar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  return (
      <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>      {/* Any one of the two will get rendered depending upon the screen size*/}
        <BigSidebar></BigSidebar>
         <div>
          <Navbar />
          <div className='dashboard-page'></div>
           <Outlet />
        </div>
        </main>
       
     </Wrapper>
  )
}

export default SharedLayout