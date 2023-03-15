import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { Scontext } from '../App';

const Order = (props) => {
  const { uId, getid } = props;
  const id = getid;
  console.log(id);

  const { data } = useContext(Scontext);


  const [order, setorder] = useState()
  const [err, seterr] = useState()
  console.log(useContext(Scontext))



  const fetchorder = () => {
    axios.get("http://localhost:3001/orderpending", {
    }).then(async (res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        console.log(" responce", res.data);
        setorder(res.data)
      }
      else seterr("you have no pending orders")
    });
  }

  useEffect(() => {
    fetchorder()

  }, [])


  return (
    <>{
      err ? <h4 style={{padding:"10px"}}>{err}</h4>:
      <div>
    
      <h3 style={{ textAlign: "center" }}>Pending Orders</h3>
      <div style={{ display: "flex", margin: "10px", maxWidth: "900px" }}  >
        {
          order && order.map((key) => {
            return (
              data && data.map((data) => {
                return (
                  key.dishes == data.Title &&
                  <div className="mainstyle" style={{ width: "900px" }}  >
                    <img className="imgstyle" src={`../images/${data.M_ID}.jpg`} alt="Avatar of Jonathan Reinink" />
                    <div className="subdivstyle" >

                      <div className="titlestyle" >{data.Title}</div>
                      <span className='titlestyle' >{`$${data.Price}`}</span>
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
      </div>
}
    </>
  )
}

export default Order;