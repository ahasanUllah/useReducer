import React, { useState } from 'react';

const Counter = () => {
   const [counter, setCounter] = useState(0);
   return (
      <div className="flex justify-center items-center h-screen">
         <div>
            <h1>{counter}</h1>
            <button className="btn bg-gray-600 mx-12 text-white" onClick={() => setCounter(counter - 1)}>
               Decrement
            </button>
            <button className="btn bg-gray-600 mx-12 text-white" onClick={() => setCounter(counter + 1)}>
               Increament
            </button>
         </div>
      </div>
   );
};

export default Counter;
