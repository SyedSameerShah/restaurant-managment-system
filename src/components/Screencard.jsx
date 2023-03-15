import React, { useState } from 'react'
import axios from 'axios';

function Screencard(props) {
  const { Title, Qnt, id, fetchdata } = props;
  const [err, seterr] = useState()

  const Done = (id) => {
    console.log("done")
    axios.post("http://localhost:3001/screen", {
      id
    }).then(async (res) => {
      if(res.data.msg == true)
          seterr(res.data.msg);
    });
    fetchdata();
  }

  return (
    <div>
      <h3>Dish : {Title}</h3>
      <p>Quanitiy : {Qnt}</p>
      <button onClick={Done(id)} className='btn' > Done</button>
      <p>{err && err}</p>
    </div>
  )
}

export default Screencard;
