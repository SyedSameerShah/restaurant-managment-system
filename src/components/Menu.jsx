import React, { useEffect, useContext } from 'react'
import Card from './Card'
import axios from 'axios';
import '../assets/menu.css';
import { Link } from "react-router-dom";
import { Scontext } from '../App';

const Menu = () => {

  // var data = []; 
  // const [data, setdata] = useState()

  const { data, cartitems, newcart, setnewcarts } = useContext(Scontext);


  // const fetchdata = () => {
  //   axios.get("http://localhost:3001/menu", {
  //   }).then(async (res) => {
  //     // console.log(res.data);
  //     if (res.data.length > 0) {
  //       console.log(" responce", res.data);
  //       //  setdata(res.data)
  //     }
  //     else seterr(res.data.msg)
  //   });
  // }


  const clear = () => {

    keys.forEach(key => {

      cartitems[key] = 0;

    });
    console.log(cartitems)

  }

  const Bag = () => {

    data.forEach(key => {
      if (cartitems[key.Title][0] > 0) {
        newcart[key.Title] = [cartitems[key.Title][0], cartitems[key.Title][1]];
      }

    });
    console.log(newcart);
  }


  // useEffect(() => {

  //   fetchdata();

  // }, [])

  return (
    <>
      <div className='menu'>
        <div className='heading'>
          <h2>Restaurent Menu</h2>
          <hr />
        </div>
        <div className='card'>
          {

            data && data.map(ele => {
              return (
                <Card Title={ele.Title} id={ele.M_ID} des= {ele.Description} price={ele.Price} Quantity={ele.Present_Quantity} />
              )
            })

          }
        </div>


        <div className='bag'>
          <button onClick={clear} className="btn">clear</button>

          <Link to="/cart" ><button onClick={Bag} className="btn">Next</button></Link>

        </div>
      </div>
    </>
  )
}

export default Menu;