import React, { useContext, useState, useEffect } from 'react'
import { Scontext } from '../App';
import axios from 'axios';
import Screencard from './Screencard';

function Screen() {
  const { data } = useContext(Scontext);
  const [ord, setord] = useState();
  const [msg, setmsg] = useState();
  const fetchdata = () => {
    axios.get("http://localhost:3001/screen", {
    }).then(async (res) => {
      console.log("res",res.data)
      setmsg("")
      if (res.data.length > 0) {
        setord(res.data);
      }
      else {
        setmsg("we have no ORDERS!!")
      }
    });
  }


  useEffect(() => {

    fetchdata();
  }, [])

  return (
    <div>
    <div>
      {
      ord && ord.map((ord) => {
        return (
          <Screencard Title={ord.dishes} Qnt={ord.Quantity} id={ord.O_ID} fetchdata={fetchdata}></Screencard>
        )
      })
    }
    </div>
    <p style={{padding:"10px"}}>{msg && msg}</p>
    </div>
  )
}

export default Screen