import React, { useContext } from "react";
import { UserContext } from "../userContext";

export function Index() {
   const { value, setValue } = useContext(UserContext);
   return (
      <div>
         <h2>Home</h2>
         <p>{value}</p>
         <button onClick={() => setValue("hey")}>Change Value</button>
      </div>
   )
}