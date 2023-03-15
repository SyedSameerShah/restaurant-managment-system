import React, { useState, useEffect, useContext } from 'react'
import { Scontext } from '../App';
import axios from 'axios'


const Update = () => {
    const [qnt, setqnt] = useState()
    const { inital, data } = useContext(Scontext);


    useEffect(() => {
        setqnt(inital)
    }, [data])

    const postdata = async (e) => {
        axios.post("http://localhost:3001/quantity", {
            qnt
        }).then((res) => {
            alert(res.data.msg)
        });

    }

    return (
        <div style={{ margin: "20px" }}>
            {
                data && data.map((ele) => {
                    return (
                        <div style={{ display: "flex", margin: "10px" }}>
                            <div style={{ width: "300px" }}>
                                <p>Dish : {ele.Title}</p>
                                <p>Present-Quantity : {ele.Present_Quantity}</p>
                            </div>
                            <input type="text" name={ele.Title} onChange={(e) => {
                                setqnt({ ...qnt, [e.target.name]: ele.Present_Quantity + parseInt(e.target.value) })}}
                                 value={data.Title} placeholder="Enter the quantity" />
                        </div>
                    )
                })
            }
            <input type="submit" onClick={postdata} name="submit" value="Update" />

        </div>
    )
}

export default Update