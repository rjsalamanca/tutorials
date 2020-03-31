import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { login } from '../utils/login';

export function Index() {
   const { user, setUser } = useContext(UserContext);
   return (
      <div>
         <h2>Home</h2>
         <pre>{JSON.stringify(user, null, 2)}</pre>
         {user ? <button onClick={() => setUser(null)}>logout</button> :
            <button onClick={async () => {
               const user = await login();
               setUser(user)
            }}>Login</button>
         }
      </div>
   )
}