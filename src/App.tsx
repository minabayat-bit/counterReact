import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-full flex flex-col gap-6 justify-center items-center ">
      <>
        <h2 className="text-[50px] text-gray-500 font-bold ">Counter</h2>
      </>
      <>
        <p
          className={
            count > 0
              ? "text-green-600 text-8xl font-semibold"
              : count < 0
              ? "text-red-600 text-8xl font-semibold"
              : "text-black text-8xl font-semibold"
          }
        >
          {count}
        </p>
      </>
    </div>
  );
}

export default App;
