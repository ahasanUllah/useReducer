import React, { useState } from 'react';
import ChildCounter from './ChildCounter';

const Counter = () => {
   const [counter, setCounter] = useState(0);
   return (
      <div className="flex justify-center items-center h-screen">
         <div>
            <h1 className="text-2xl">Counter</h1>
            <h1>{counter}</h1>
            <button className="btn bg-gray-600 mx-12 text-white" onClick={() => setCounter(counter - 1)}>
               Decrement
            </button>
            <button className="btn bg-gray-600 mx-12 text-white" onClick={() => setCounter(counter + 1)}>
               Increament
            </button>
         </div>
         <ChildCounter counter={counter} setCounter={setCounter}></ChildCounter>
      </div>
   );
};

export default Counter;
