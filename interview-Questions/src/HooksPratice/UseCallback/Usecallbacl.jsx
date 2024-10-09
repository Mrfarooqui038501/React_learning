import React,{useCallback,useEffect,useState} from "react";



// function CallbackHook(){
//     const[count, setCount] = useState(0);
//     const result = useCallback(() =>{
//        return count*2;
//     },[count])

//     return(
//         <div>
//            <p>Resunt:{result()} </p>
//            <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     )
// };

// export default CallbackHook;


// rendering on when both dependencies change 

// function  Greetings(){
//     const[age, setAge] = useState("");
//     const[name, setName] = useState("");

//     const Greet = useCallback(() =>{
//        return <h1>Hello my name is {name} and my age is {age}</h1>
//     },[name,age])

//     return(
//         <div>
//             <label>Name</label>
//               <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
//               <label>Age</label>
//               <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
//               <button >Greet</button>
//               <p>details:{Greet()}</p>
//         </div>
//     )
// };

// export default Greetings;


//Using callback hook with useffect

// function DataStore(){
//     const[data, setData] = useState([]);

//     const FetchData = useCallback(() =>{
//         fetch("https://www.thesportsdb.com/free_sports_api")
//         .then((response) => response.json())
//         .then((data) => setData(data));
//     },[]);

//     useEffect(()=>{
//         FetchData();
//     },[FetchData])

//     return(
//         <div>
//             <ul>
//                 {data.map((item) =>{
//                     <li key={item.id}>{item.name} </li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default DataStore;