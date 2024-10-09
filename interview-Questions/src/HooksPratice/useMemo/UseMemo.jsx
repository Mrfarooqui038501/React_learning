import React,{useMemo,useState, useEffect} from "react";

// function Counter(){
//     const [count, setCount] = useState(0);
//     const calculation = useMemo(() =>{
//        return count *2;
//     },[count])

//     return(
//         <div>
//             <p>Calculated value {calculation} </p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     )
// };
 
// export default Counter;


// in this app will do computation with dependency array

// const Calulation = ({dependencies}) =>{
//     const result = useMemo(()=>{

//         let i = 0;
//         while(i<10000) i++;
//         return dependencies.reduce((acc, curr) => acc + curr, 0);
//      },[dependencies])

//      return(
//      <>
//             <p>Result:{result} </p>
//      </>
//      )
// }

// export default Calulation;


const MemoizedComputationMultipleDependencies = ({ count, multiplier }) => {
    const result = useMemo(() => {
      let i = 0;
      while (i < 1000000000) i++;
      return count * multiplier;
    }, [count, multiplier]);
  
    return (
      <div>
        <p>Result: {result}</p>
      </div>
    );
  };

  export default  MemoizedComputationMultipleDependencies;

