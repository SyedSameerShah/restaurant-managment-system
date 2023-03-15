import { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AdminNav from './components/AdminNav';
import Home from './components/Home';
import Login from './components/Login';
import Singup from './components/Singup';
import LoginAdmin from './components/LoginAdmin';
import Menu from './components/Menu';
import Order from './components/Order';
import Revenu from './components/Revenu';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Screen from './components/Screen';
import Update from './components/Update';
import Expences from './components/Expences';
import Menuadd from './components/Menuadd';


export const Scontext = createContext();

function App() {

  let cartitems = {},inital= {}, newcart = {}, uId = 0;
  const [data, setdata] = useState( )
  const [carts, setcarts] = useState()
  const [uid, setuid] = useState()

  const fetchdata = () => {
    axios.get("http://localhost:3001/menu", {
    }).then(async (res) => {
      setdata(res.data);
      res.data && res.data.map( ele => {
        cartitems[ele.Title] = [0, ele.Price]
        inital[ele.Title] = ele.Present_Quantity;
      });
      setcarts(cartitems);
      console.log(cartitems);
    });

  }


  useEffect(() => {

    fetchdata();
  }, [])

  const getkeys = () => {
    let keys = Object.keys(newcart);
    console.log(keys);
    return keys;
  }


  const setid = (id) => {
    uId = id;
    console.log("UIS", uId);
  }

  function getidd() {
    return uId;
  }
  const senddata = () => {
    console.log()

  }

  return (
    <div className="App">

      <Scontext.Provider value={{ cartitems: carts,inital:inital, newcart: newcart, getkeys, data: data }}>
        <Router>

          <Routes>
            <Route Index path='/' element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/adminlogin" element={<LoginAdmin setid={setid} />} />
            <Route exact path="/singup" element={<Singup />} />
            <Route exact path="/" element={<Navbar />} >
              <Route exact path="/menu" element={<Menu />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order' element={<Order uId={uId} getid={getidd} send={senddata} />} />
              <Route path='/payment' element={<Payment />} />

            </Route>
            <Route exact path="/" element={<AdminNav  />} >
              <Route path='/revenu' element={<Revenu />} />
              <Route path='/screen' element={<Screen />} />
              <Route path='/update' element={<Update />} />
              <Route path='/expence' element={<Expences />} />
              <Route path='/addmenu' element={<Menuadd />} />
            </Route>
          </Routes>
        </Router>
      </Scontext.Provider>

    </div>

  )
}

export default App;
