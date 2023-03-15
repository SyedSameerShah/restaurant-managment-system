import React, {  useState, useContext } from 'react';
import { Scontext } from '../App';
import '../assets/card.css';


function Card(props) {

  const { cartitems } = useContext(Scontext);

    

    const { des,Title, price,id,Quantity } = props;

    const [msg, setmsg] = useState()

    function increment() {
        console.log(cartitems)
        if( cartitems[Title][0] < Quantity){

        console.log(cartitems[Title][0]);
        cartitems[Title] = [ cartitems[Title][0] + 1,cartitems[Title][1]]
        console.log(cartitems);    
        }else{
            setmsg(`we have only ${Quantity} number of plates`)
        }
    }


    function decrement() {
        if (cartitems[Title][0] > 0) { 
            cartitems[Title] = [ cartitems[Title][0] - 1,cartitems[Title][1]];
            setmsg('');
        }
    }
    
    return (
            
        <div className="mainstyle" >
            <img className="imgstyle" src={`../images/${id}.jpg`} alt="IMAGE NOT FOUND" />
            <div className="subdivstyle" >
                
                <div className="titlestyle" >{Title}</div>
                <span className='titlestyle' >{`$${price}`}</span>
                <p className="pstyle" >{des}</p>
                { Quantity >0 ?
                 <div className="flex" >
                    <div  className="countstyle" >
                    <button onClick={increment} className="qtn-btn" >+</button>
                    <p style={{paddingTop:"12px"}}>{cartitems[Title][0] && cartitems[Title][0]}</p>
                    <button onClick={decrement} className="qtn-btn" >-</button>
                    </div>
                    <p style={{textAlign:"right",color:"red"}}>{msg && msg}</p>
                </div> :  <p style={{textAlign:"right",color:"red",padding:"3px"}}>Out of stock</p> }
            </div>
        </div>
          
    )
}

export default Card;