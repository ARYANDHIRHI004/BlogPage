import React from 'react'
import { Link } from "react-router-dom";
import Container from '../container/Container';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  console.log(authStatus)
  const navItems =[
    {
      name: "Home",
      slug:"/",
      active: true
    },
    {
      name: "Login",
      slug:"/login",
      active: !authStatus
    },
    {
      name: "Sign Up",
      slug:"/signup",
      active: !authStatus
    },
    {
      name: "All Post",
      slug:"/allpost",
      active: authStatus
    },
    {
      name: "Add Post",
      slug:"/addpost",
      active: authStatus
    },
   
  ]

  return (
    <div className='py-3 shadow bg-blue-800 text-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            {/* <Link to='/'>
              <Logo width='70px'   />

              </Link> */}
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </div>
  )
}

export default Header
