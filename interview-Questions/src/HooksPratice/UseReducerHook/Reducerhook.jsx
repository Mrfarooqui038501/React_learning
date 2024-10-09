import { useReducer } from "react";
import reducer from "./Reducer";

function Count(){
    const initialValue = (0)
    const[count, dispatch] = useReducer(reducer, initialValue)

    return(
        <div>
            <button onClick={() => dispatch({type:"inc"})}>Increase</button>
            <h1>Count:{count} </h1>
            <button onClick={() => dispatch({type:"dec"})}>Decrease</button>
        </div>
    )
}

export default Count