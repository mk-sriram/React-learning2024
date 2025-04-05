import React, { useEffect, useRef } from "react";

//Race condition, page 2 shows up after page 1 => due to network delay and maybe
// how to fix
/* */

const abortController = useRef(null);
useEffect(() => {
  const fetchData = async () => {
    abortController.current?.abort();
    abortController.current = new AbortController();
    //you can refuse the abort controller again, you can't be using the same abort controller again
    setIsloading(false);

    try {
      const response = await fetch("", {
        signal: abortController.current.signal,
      });
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("aborted");
        return;
        //true only if its console error, the triggers out error state
      }
    } finally {
      setIsloading(true);
    }
  };
}, []);

if (isLoading) return <div> Loading </div>;
export default function Fetch() {
  return <div></div>;
}

//abort controlled
