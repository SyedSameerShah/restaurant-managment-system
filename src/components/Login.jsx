import React, { useState, useContext } from 'react';
import '../assets/Login.css';
import { Scontext } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

  const navigate = useNavigate();
  const reset = {
    username: "",
    password: ""
  }

  const [data, setdata] = useState(reset);
  const [err, seterr] = useState()
  const { username, password } = data;


  const postdata = async (e) => {
    console.log(username, password);
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      data
    }).then((res) => {
      console.log(res.data.msg);
      console.log(res.data.uid)
      if (res.data.msg == true) {
        navigate('/menu');
      } else {
        seterr(res.data.msg)
      }
    });

  }


  console.log(useContext(Scontext));

  const onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="div">
        <div className="dummy">
          <div className="container">
            <div className="login"></div>
            <div className="top">
              <div className="topContent">
                <img src="./images/logo2.png" alt="" srcset="" />
              </div>
            </div>
            <div className="main2">
              <p id="mainHeading">LOGIN</p>
              <ul>
                <p id="msg5"></p>
                <li><label htmlFor="email"> Email</label>
                  <input type="text" name="username" id="email" onChange={onchange} value={username} placeholder="Enter your email address/Username" />
                </li>
                <li><label htmlFor="password">Password</label>
                  <div id="password">
                    <input type="password" name="password" id="password5" onChange={onchange} value={password} placeholder="Enter our password" />
                    <div id="fpassword">
                      <Link to="cssPassword.html" > <button className="fp">Forgot password?</button></Link>
                    </div>
                  </div>
                </li>
                <li><input type="checkbox" id="Remember" name="Remember" />
                  <label htmlFor="Remember"> Remember me</label>
                </li>
                <li><p style={{ textAlign: "center" }}>{err && err}</p></li>
                <li id="submit1"><input type="submit" onClick={postdata} name="submit" value="LOGIN" /></li>
              </ul>
              <p id="mainPara">Don't have an account?<button id="signupbtn"><Link to="/singup"><strong>SIGN
                UP</strong></Link></button> </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;