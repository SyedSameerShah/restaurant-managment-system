import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Menuadd() {

    let initialstate = {
        title: "",
        dis: "",
        price: "",
        cat: "",
        type: "",
        qnt:""
    }
    const [data, setdata] = useState(initialstate)

    const { title, dis,price,cat, type,qnt } = data;


    const handleSubmit = async (e) => {
        console.log(data)
        if (title == "" || dis == "" || price == "" || cat == "") {
            console.log("worg input");
        } else {
            axios.post("http://localhost:3001/addmenu", {
                data
            }).then((res) => {
                setdata(initialstate);
                console.log(res.data.msg);
                if (res.data.msg == true){
                    alert("men item add sucessfully")
                }
            });
        }
    }
    
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

  return (
    <div>
        <div className='div' >
            <div className="dummy">
                <div className="container2">
                    <p id="mainHeading2">ADD MENU</p>

                    <div className="signup">

                        <ul style={{ listStyleType: "none" }}>
                            <li><label htmlFor="fname"> title </label></li>
                            <li><input type="text" name="title" id="fname"  value={title} onChange={onchange} /></li>

                            <li><label htmlFor="lname"> discreption</label></li>
                            <li><input type="text" name="dis" id="lname" value={dis} onChange={onchange} /></li>

                            <li><label htmlFor="email2"> Price</label></li>
                            <li><input type="email" name="price" id="email2" value={price} onChange={onchange} /></li>

                            <li><label htmlFor="Number2"> category</label></li>
                            <li><input type="tel" name="cat" id="number2" value={cat} onChange={onchange} /></li>
                            <li><label htmlFor="Number2"> Quantity</label></li>
                            <li><input type="tel" name="qnt" id="number2" value={qnt} onChange={onchange} /></li>
                            <li><label htmlFor="password2">Type</label></li>
                            <li><input type="text" id="password2" name="type" value={type} onChange={onchange} /></li>

                            <li id="submit2"><input type="submit" onClick={handleSubmit}  value = "add menu"id="sp" /></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menuadd;