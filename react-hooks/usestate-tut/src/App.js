import React, { useState } from 'react';

function App() {
   const [{ count, count2 }, setCount] = useState({
      count: 10,
      count2: 20
   });

   return (
      <div>
         <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1 }))} >+</button>
         <div>Count 1:{count}</div>
         <button onClick={() => setCount(currentState => ({ ...currentState, count2: currentState.count2 + 1 }))} >+</button>
         <div>Count 2:{count2}</div>
      </div>
   );
}

export default App;
