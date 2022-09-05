import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {inc,dec} from "./actions";

const Counter = () =>{

    const dispatch = useDispatch()
    const likes = useSelector(state => state)

    console.log(likes)

    const like = () =>{
        dispatch(inc())
    }

    const dislike = () =>{
        dispatch(dec())
    }

    return (
        <div>
            <h1 >лайков:{likes} </h1>
            <button
                onClick={()=>like()}
                className="btn btn-success">like</button>
            <button
                onClick={()=>dislike()}
                className="btn btn-danger">dislike</button>
        </div>
    )
}


export default  Counter