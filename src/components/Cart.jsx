import React, { useState, useContext, useEffect } from 'react'
import { Scontext } from '../App';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import '../assets/card.css';

const Cart = (props) => {
    const { send } = props;
    const navigate = useNavigate();

    const { newcart, getkeys, senddata, data } = useContext(Scontext);

    let Totalprice = 0;
    const [msg, setmsg] = useState()

    console.log(newcart);
    const order = () => {
        axios.post("http://localhost:3001/order", {
            newcart
        }).then((res) => {
            if (res.data.msg == "Done") {
                navigate("/order")
                alert("your order has been placed");
            }
            if (res.data.msg != "")
                setmsg("please Login")
            // navigate('/order');
        }).catch((err) => {
            console.log(err);
        });
    }
    const keys = getkeys()

    return (
        <div style={{ margin: " 10px 20%" }}>
            {
                keys ? keys.map((key) => {
                    return (
                        data && data.map((data) => {
                            if (key == data.Title)
                                Totalprice += data.Price * newcart[data.Title][0];
                            return (
                                key == data.Title && 
                                <div className="mainstyle" >
                                    <img className="imgstyle" src={`../images/${data.M_ID}.jpg`} alt="img not found" />
                                    <div className="subdivstyle" >

                                        <div className="titlestyle" >{data.Title}</div>
                                        <span className='titlestyle' >{`$${data.Price}`}</span>
                                        <p className="pstyle" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                        <div className="countstyle" >
                                            <p style={{ padding: "10px" }}> {newcart[key][0]}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                }) : <p>NO Product selected</p>
            }
            <div><p>{msg && msg}</p></div>
            <div style={{ textAlign: "right" }}>
                <h3>Total : {Totalprice}</h3>

                <button onClick={order} type="submit" className='btn' >Order</button>
            </div>
        </div>
    )
}

export default Cart;