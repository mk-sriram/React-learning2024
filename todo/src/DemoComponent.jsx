import React from "react";
import useCustom from "./useCustom";

export default function DemoComponent() {
  const value = useCustom(); //so when it mounts, its value will be init with the value from the component
    //Custom -> share the logic, not the values, 

    /* 
        1. state to keep track of the count
        1.1. fetch data -> update the state 
        1.2. data -> flow between objects 
        2. render the component 
        3. filter -> remove the elements 
        4. present the component, to the user 
    */


  return <div></div>;
}


