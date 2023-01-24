import React, { useContext } from 'react';
import { CounterContext } from './App';

const ChildCounter = () => {
   const { counter, setCounter } = useContext(CounterContext);
   return (
      <div>
         <div>
            <h1>Child Counter</h1>
            <h2>{counter}</h2>
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

export default ChildCounter;
