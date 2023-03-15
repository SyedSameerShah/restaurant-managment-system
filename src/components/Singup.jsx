import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import '../assets/Login.css';

function Singup() {

  const navigate = useNavigate();

    let response;
    let initialstate = {
        lastName: "",
        firstName: "",
        email: "",
        number: "",
        password: "",
        cpass: "",
        gender: ""
    }

    const [data, setdata] = useState(initialstate);
    const [err, seterr] = useState()

    const { firstname, lastName, email, number, password, cpass } = data;

    const handleSubmit = async (e) => {
        console.log(data)
        if (firstname == "" || lastName == "" || email == "" || number == "" || password == "") {
            console.log("worg input");
        } else {
            axios.post("http://localhost:3001/singup", {
                data
            }).then((res) => {
                setdata(initialstate);
                console.log(res.data.msg);
                if (res.data.msg == true){
                    navigate('/login');
                }
                else seterr(res.data.msg)
            });
        }
    }


    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className='div' >
            <div className="dummy">
                <div className="container2">
                    <p id="mainHeading2">SIGNUP</p>

                    <div className="signup">

                        <ul style={{ listStyleType: "none" }}>

                            <li><label htmlFor="fname"> First name </label></li>
                            <li><input type="text" name="firstName" id="fname" value={firstname} onChange={onchange} /></li>

                            <li><label htmlFor="lname"> Last name</label></li>
                            <li><input type="text" name="lastName" id="lname" value={lastName} onChange={onchange} /></li>

                            <li><label htmlFor="email2"> Email</label></li>
                            <li><input type="email" name="email" id="email2" value={email} onChange={onchange} /></li>

                            <li><label htmlFor="Number2"> Number</label></li>
                            <li><input type="tel" name="number" id="number2" value={number} onChange={onchange} /></li>

                            <li><label htmlFor="password2">Password</label></li>
                            <li><input type="password" id="password2" name="password" value={password} onChange={onchange} /></li>

                            <li><label htmlFor="Cpassword">Confirm Password</label></li>
                            <li><input type="password" id="Cpassword" name="cpass" value={cpass} onChange={onchange} /></li>

                            <li><input type="radio" id="male" name="gender" value="M" onChange={onchange} />
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="female" name="gender" value="F" onChange={onchange} />
                                <label htmlFor="female"> Female</label>
                            </li>

                            <li><input type="checkbox" id="tearms" name=" tearms" value="Tearms&conditions" required />
                                <label htmlFor="tearms"> I accept the <a href="tearmsNconditions.html"> Tearms & Conditions</a></label>
                            </li>

                            <li id="submit2"><input type="submit" onClick={handleSubmit} id="sp" /></li>
                            <li><p>{err && err}</p></li>
                        </ul>

                    </div>
                    <p>{response}</p>
                    <p id="mainPara2"> Already have an account? <Link to="/login"><strong>Log In</strong></Link></p>
                </div>
            </div>
        </div>

    )
}


export default Singup;