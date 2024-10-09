import React,{useEffect, useState} from "react";


// in this app we have shown the count in the chrome tab 
// function CountUpdate (){
//    const [count, setCount] = useState(0);

//      useEffect(() => {
//         document.title = count  // we use this to show the count in chrome tab 
//      })
//     return(
//         <div>
//            <button onClick={() => setCount(count + 1)}>Increase</button>
//            <h1>Count:{count} </h1>
//            <button onClick={() => setCount(count - 1)}>Decrease</button>
//         </div>
//     )
// }

// export default CountUpdate;


// in this app we will react the the screen size teller 

// function ClearUp() {

//  const [widthSize, setWidthsize] = useState(window.screen.width)

//  const currentScreenwidth = () => {
//     // in this function we are setting our window size using window.innerwidth
//     setWidthsize(() => window.innerWidth);
//  };

//  useEffect(() =>{
//     // here we used JS functions for adding eventlistener 
//     window.addEventListener("resize", currentScreenwidth); 
    

//     // and this is our clear up function for removing previous data 
//     return () => {
//         window.removeEventListener('resize', currentScreenwidth)
//     }
//  })

//      return(
//         <div>
//        <h1>This is  Size of Your Window: {widthSize} </h1>
//         </div>
//      )
//  }

//  export default ClearUp


// now we will create a timer Appication 

//  function Displaytimer(){

//  const [timer, setTimer]  = useState(0);

//  useEffect(() => {
//     const interval = setInterval(() =>{
//         if(timer > -1){
//             setTimer(timer + 5)
//         }
//     },1000);

//     return () => clearInterval(interval);
//  },[timer])

//  return(
//     <div>
//         <h1>Countdown:{timer}</h1>
//     </div>
//  )
//  }

//  export default Displaytimer;



// in this app we will fetch the data from an api 

//  function FetchData(){

//     const [data, setData] = useState(null)
//      useEffect(() =>{
//           const fetchData = async () => {
//                try {
//                 const response = await fetch('https://randomuser.me/api/')
//                 const data = await response.json();
//                 setData(data)
//                } catch (error) {
//                 console.log("data not found" , error)
//                }
//           }
//           fetchData();
//      },[])

//     return(
//         <div>
//            {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//         </div>
//     )
//  }

//  export default FetchData;


// in this app we will display the message 

//  function PropUpdater({message}){

//  const [messages, setMessages] = useState('I am learning React')

//     useEffect(() =>{
//         setMessages(messages)
//     },[message]);


//     return(
//         <div>
//             <p>Display Message:{messages}</p>
//         </div>
//     )
//  }
//  export default PropUpdater;


// in this application we will create loading indicator and will hide it when the data is available 

// function Loading(){
//  const[data, setData] = useState(null);
//  const[isLoading, setIsLoading] = useState(true);
 
//  useState(() =>{
//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://official-joke-api.appspot.com/random_joke")
//             const data = await response.json();
//             setData(data)
//             setIsLoading(false)

//         } catch (error) {
//             console.log("Data not found", error)
//             setIsLoading(false)
//         }
//     };
//        fetchData();
//  },[])

//  return(
//     <div>
//             {isLoading? (
//                 <p>Loading...</p>
//             ): (
//                 <pre>{JSON.stringify(data,null,2)}</pre>
//             )}
//     </div>
//  );
// }

// export default Loading;


// in this app we will prevent the debouncing

// function Debouncing({onSearch}){
//    const [search, setSearch] = useState('')

//    useEffect(() => {
//     const timeout = setTimeout(() =>{
//         onSearch(search)
//     },500)

//     return () => clearTimeout(timeout)

// },[search,onSearch])

//     return(
//         <div>
//          <input type="text" 
//          value={search}
//          onChange={(e) => setSearch(e.target.value)}
//          />
//         </div>
//     )
// }

// export default Debouncing;