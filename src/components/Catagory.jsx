import React , {useReducer} from 'react'
import { Link } from 'react-router-dom';


function Catagory(props) {
    const { data, img } = props;
    const Cstyle={
        backgroundColor: `url(${img})`,
        height:"70px",
        width : "100px",
        margin : "12px",
        borderRadius : "6px",
        fontWeight: "700px",
        textAlign : "center",
        paddingTop: "35px"
    }

    
    
    return (
        <>
            <div className='flex mx-3'>
                <Link to='/burger'> <div style={Cstyle  } className='h-36 w-36 m-3 rounded-md font-bold text-l text-center py-14 '> {data} 
                </div> </Link>
            </div>
        </>
    )
}

export default Catagory;