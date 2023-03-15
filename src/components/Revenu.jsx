import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Revenu() {

    const [order, setorder] = useState()
    const [sum, setsum] = useState()
    const fetchdata = () => {
        axios.get("http://localhost:3001/revenu", {
        }).then(async (res) => {
            console.log(res.data);
            if (res.data.result.length > 0) {
                console.log(" responce", res.data);
                setorder(res.data.result)
                setsum(res.data.sum)
            }
        });
    }

    useEffect(() => {
        fetchdata()
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
        <div style={{ margin: "20px" }}>
            <h2 style={{ textAlign: "center", margin: "5px" }}> Daily  Revenue</h2>
            <table style={thstyle}>
                <tbody>
                    <tr>
                        <th>Payment No</th>
                        <th>Order No</th>
                        <th>UserID</th>
                        <th>Price</th>

                    </tr>
                    {
                        order && order.map((ele) => {
                            return (
                                <tr className='row' style={style}>
                                    <td>{ele.P_ID}</td>
                                    <td>{ele.O_ID}</td>
                                    <td>{ele.U_ID}</td>
                                    <td>{ele.Amount}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
            <h3 style={{ textAlign: "right", padding: "10px 10px" }}>Total Revenue = {sum && sum}</h3>
        </div>
    )
}

export default Revenu;