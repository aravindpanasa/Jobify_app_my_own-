import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaHome } from 'react-icons/fa'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'



const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { toggleSideBar, logoutUser, user } = useAppContext();
    return (
      
      <Wrapper>
          <div className='nav-center'>
                <button className='toggle-btn' onClick={toggleSideBar}/*onClick={() => console.log("toggle sidebar")}*/>
                 <FaAlignLeft />
              </button>
              <div>
                  <Logo />
                  <h3 className='logo-text'>dashboard</h3>
              </div>
              <div className='btn-container'>
                  <button type='button' className='btn' onClick={()=>setShowLogout(!showLogout)}>
                      <FaUserCircle />
                          {user?.name}
                      <FaCaretDown/>
                  </button>
                    <div className={showLogout?'dropdown show-dropdown':'dropdown'}>
                      <button type='button' className='dropdown-btn' onClick={logoutUser}>
                            logout
                      </button>
                  </div>
                  
              </div>
              
          </div>
      </Wrapper>   
  )
}

export default Navbar