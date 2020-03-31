import React, { useContext } from "react";
import { UserContext } from "../userContext";

export function About() {
   const { value, setValue } = useContext(UserContext);
   return (
      <div>
         <h2>About</h2>
         <p>{value}</p>
      </div>
   )
}