import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../assets/Navbar.css';


export default function Navbar(props) {
  const { Tnumber } = props
  return (
    <>
      <div className='nav'>
        <div className=''>
          <Link>Restaurant Name</Link>
        </div>
        <div id='topnav' >
          <Link to="/login"> Login</Link>
          <Link to="/payment"> Payment</Link>
          <Link to="/order"> Orders </Link>
          <Link to="/cart"> Cart </Link>
          <Link to="/menu"> menu </Link>

        </div>
      </div>
      <Outlet />
    </>
  )
}
