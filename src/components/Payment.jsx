import React, { useState, useContext, useEffect } from 'react'
import { Scontext } from '../App';
import axios from 'axios';

const Payment = () => {
  const { data } = useContext(Scontext);

  const [pay, setpay] = useState()
  const [msg, setmsg] = useState()
  let total = 0;

  const fetchdata = () => {
    axios.get("http://localhost:3001/payments", {
    }).then(async (res) => {
      console.log("res",res.data);
      if (res.data.length > 0) {
        console.log(" responce", res.data);
        setpay(res.data)
      }else{
        setmsg("you have no pending payments")
      }
    });
  }

  useEffect(() => {
    fetchdata();
  }, [])


  const payment = () => {
    axios.post("http://localhost:3001/orderupdate", {
      pay
    }).then((res) => {
      console.log(res.data);
      alert("payment sucessfull");
      fetchdata();
    });
  }

  return (
    <>{
      msg ? <h4 style={{padding:"10px"}}>{msg}</h4>:
    <div>
      <div style={{ display: "flex", margin: "10px", maxWidth: "900px" }}>
        {
          pay && pay.map((key) => {
            return (
              data && data.map((data) => {
                if (key.dishes == data.Title)
                  total += data.Price * key.Quantity;
                return (
                  key.dishes == data.Title &&

                  <div className="mainstyle" >
                    <img className="imgstyle" src={`./images/${data.M_ID}.jpg`} />
                    <div className="subdivstyle" >

                      <div className="titlestyle" >{data.Title}</div>
                      <span className='titlestyle'>{`$${data.Price}`}</span>
                      <div className="countstyle" >
                        <p>Quantity : {key.Quantity}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          })
        }

      </div>
      <div style={{ padding: "10px" }}>
        <h3>TOTAL : {total}</h3>
        <button onClick={payment} style={{ padding: " 5px 15px" }} className="btn">pay</button>
      </div>
      </div>
      }
    </>
  )
}

export default Payment;