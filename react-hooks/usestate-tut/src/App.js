import React, { useState } from 'react';

function App() {
   const [{ count, count2 }, setCount] = useState({
      count: 10,
      count2: 20
   });

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   return (
      <div>
         <div style={{ border: '1px solid black', margin: '5px' }}>
            <h3>Counter Example:</h3>
            <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1 }))} >+</button>
            <div>Count 1:{count}</div>
            <button onClick={() => setCount(currentState => ({ ...currentState, count2: currentState.count2 + 1 }))} >+</button>
            <div>Count 2:{count2}</div>
         </div>
         <div style={{ border: '1px solid black', margin: '5px' }}>
            <h3>Login Example:</h3>
            <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
         </div>
      </div >
   );
}

export default App;
