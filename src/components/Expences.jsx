import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Expences = () => {

  const [exp, setexp] = useState()

  const fetchdata = () => {
    axios.get("http://localhost:3001/expence", {
    }).then(async (res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        console.log(" responce", res.data);
        setexp(res.data)
      }
    });
  }

  useEffect(() => {
    fetchdata();

  }, [])

  const thstyle = {
    width: "100%",
    boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
  }
  const style = {
    textAlign: "center",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    padding: "10px"
  }

  return (
    <div style={{ margin: "20px 100px" }}>
      <h2 style={{ textAlign: "center", margin: "5px" }}> Product Expences</h2>


      <table style={thstyle}>
        <tbody>
          <tr>
            <th>Product_Name</th>
            <th>Cost</th>


          </tr>
          {
            exp && exp.map((ele) => {
              return (
                <tr className='row' style={style}>
                  <td>{ele.Product_Name}</td>
                  <td>{ele.Cost}</td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Expences