import React, { useState } from "react";


/** 
 * 
 * SelectFilter component 
 * ----------------------
 * component fetchs and displays a list of users from a placeholder API 
 * 
 * 
 * PROPS: 
 * None - ( filterType: string )
 */
export default function SelectFilter() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) throw new Error("Network response was not ok ");
      y;
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log("failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  };

  const value = array.reduce((sum, value ) => sum + value, 0 )

  console.log(totalInLine) 

  

  useEffect(() => {
    const searched = setTimeout(() => {}, 1000);
    const interval = setInterval(() => {
      //function
    }, 2000);
    //TO DO :L check for errors => 
    return () => {
      clearInterval(interval);
    };
    return () => {
      clearTimeout(searched);
    };

    //Debounce this => coudl be more efficient
  }, []);
  return (
    <div>
      {users.map((user, userIndex) => {
        return <div key={userIndex}> {user.name} </div>;
      })}

      {/* Data flowing from the previous component to the new component, prop drilling, probably not the best idea  */}
    </div>
  );
}
