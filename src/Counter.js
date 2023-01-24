import React, { useState } from 'react';
import ChildCounter from './ChildCounter';

const Counter = () => {
   const [counter, setCounter] = useState(0);
   return (
      <div className="flex justify-center items-center ">
         <div>
            <h1 className="text-2xl">Counter</h1>
            <h1>{counter}</h1>
            <button
               type="button"
               className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800"
               onClick={() => setCounter(counter - 1)}
            >
               Decrement
            </button>
            <button
               type="button"
               className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800"
               onClick={() => setCounter(counter + 1)}
            >
               Increament
            </button>
         </div>
         <ChildCounter counter={counter} setCounter={setCounter}></ChildCounter>
      </div>
   );
};

export default Counter;
