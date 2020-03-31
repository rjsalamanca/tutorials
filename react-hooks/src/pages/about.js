import React, { useContext } from "react";
import { UserContext } from "../userContext";

export function About() {
   const msg = useContext(UserContext);
   return (
      <div>
         <h2>About</h2>
         <p>{msg}</p>
      </div>
   )
}