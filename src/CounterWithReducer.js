import React, { useReducer } from 'react';

const CounterWithReducer = () => {
   const initialState = 0;
   const reducer = (state, action) => {
      if (action.type === 'INCREAMENT') {
         return state + 1;
      } else if (action.type === 'DECREMENT') {
         return state - 1;
      }
   };
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <div>
         <div>
            <div>
               <h1 className="text-2xl text-green-600">Reducer Counter</h1>
               <h2>{state}</h2>
               <button
                  type="button"
                  className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800"
                  onClick={() => dispatch({ type: 'DECREMENT' })}
               >
                  Decrement
               </button>
               <button
                  type="button"
                  className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800"
                  onClick={() => dispatch({ type: 'INCREAMENT' })}
               >
                  Increament
               </button>
            </div>
         </div>
      </div>
   );
};

export default CounterWithReducer;
