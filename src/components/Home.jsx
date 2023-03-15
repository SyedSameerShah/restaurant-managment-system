import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const style = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <>
      <div className='' style={style} >
        <Link to="/login"> <button className='btn'> Login </button></Link>
        <Link to="/singup">  <button className='btn'>Singup </button></Link>
        <Link to="/adminlogin">  <button className='btn'>Login as Admin </button></Link>

      </div>
    </>
  )
}

