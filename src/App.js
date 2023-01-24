import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createContext, useState } from 'react';
import CounterWithReducer from './CounterWithReducer';

export const CounterContext = createContext();
function App() {
   const [counter, setCounter] = useState(0);
   const value = {
      counter,
      setCounter,
   };
   return (
      <CounterContext.Provider value={value}>
         <div className="App flex items-center justify-center h-screen">
            <Counter></Counter>
            <CounterWithReducer></CounterWithReducer>
         </div>
      </CounterContext.Provider>
   );
}

export default App;
