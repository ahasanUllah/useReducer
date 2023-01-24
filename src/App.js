import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createContext, useState } from 'react';

export const CounterContext = createContext();
function App() {
   const [counter, setCounter] = useState(0);
   const value = {
      counter,
      setCounter,
   };
   return (
      <CounterContext.Provider value={value}>
         <div className="App">
            <Counter></Counter>
         </div>
      </CounterContext.Provider>
   );
}

export default App;
