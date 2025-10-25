import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" h-full flex flex-col gap-6 justify-center items-center ">
     <>
     <h2 className="text-[50px] text-gray-500 font-bold ">Counter</h2>
     </>
     <>
     <p id="placeNumber" className={count>0 ?"text-green-600 text-8xl font-semibold":count<0 ?"text-red-600 text-8xl font-semibold":"text-black text-8xl font-semibold"}>{count}</p>
     </>
     <div className="flex gap-4 justify-center items-center">
       <button onClick={()=>{
        setCount(count+1)}}
        className="border-2 border-black px-3 py-1 rounded-md tracking-[0.25rem] hover:text-white hover:bg-black"
       >DECREASE</button>
         <button onClick={()=>{
          setCount(0)}}
          className="border-2 border-black px-3 py-1 rounded-md tracking-[0.25rem] hover:text-white hover:bg-black"
         >RESET</button>
       <button onClick={()=>{
        setCount(count-1)}}
        className="border-2 border-black px-3 py-1 rounded-md tracking-[0.25rem] hover:text-white hover:bg-black"
       >INCREASE</button>
     </div>
    </div>
  )
}

export default App