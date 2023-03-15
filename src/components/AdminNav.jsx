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
        <div  id='topnav' >
          <Link to="/expence"> Expences </Link>
          <Link to="/revenu"> Revenue</Link>
          <Link to="/update"> update </Link>
          <Link to="/screen"> Screen </Link>
          

          
        </div>
      </div>
      <Outlet />
    </>
  )
}
