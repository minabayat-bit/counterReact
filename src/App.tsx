import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (

    <section className=" h-full flex flex-col gap-6 justify-center items-center ">
      <>
        <h2 className="text-gray-800 font-bold text-[100px]  ">Counter</h2>
      </>
      
        <p
          className={
            count > 0
              ? "text-green-500 text-[150px] font-semibold"
              : count < 0
              ? "text-red-500 text-[150px] font-semibold"
              : "text-black text-[150px] font-semibold"
          }
        >
          {count}
        </p>
        <div className="flex justify-center items-center gap-4 *:duration-500 *:transition-all *:cursor-pointer ">
       <button onClick={()=>{
        setCount(count+1)}}
        className="text-2xl border-2 border-black px-3 py-1 rounded-md tracking-[7px] hover:text-white hover:bg-gray-800"
       >DECREASE</button>
         <button onClick={()=>{
          setCount(0)}}
          className="text-2xl  border-2 border-black px-3 py-1 rounded-md tracking-[7px] hover:text-white hover:bg-gray-800"
         >RESET</button>
       <button onClick={()=>{
        setCount(count-1)}}
        className="text-2xl  border-2 border-black px-3 py-1 rounded-md tracking-[7px] hover:text-white hover:bg-gray-800"
       >INCREASE</button>
     </div>
      <section/>
      );

    
    
  
}


export default App;
