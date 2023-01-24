import React, { useContext } from 'react';
import { CounterContext } from './App';

const ChildCounter = () => {
   const { counter, setCounter } = useContext(CounterContext);
   return (
      <div>
         <div>
            <h1>Child Counter</h1>
            <h2>{counter}</h2>
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
      </div>
   );
};

export default ChildCounter;
