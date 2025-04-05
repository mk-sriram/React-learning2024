// import React, { useEffect } from "react";
// import { useState } from "react";

// const files = {
//   children: [
//     {
//       name: "src",
//       children: [
//         {
//           name: "app.jsx",
//         },
//         {
//           name: "Main.jsx",
//         },
//         {
//           name: "map.jsx",
//         },
//       ],
//     },
//     {
//       name: "package.json",
//       children: [
//         {
//           name: "app.jsx",
//         },
//         {
//           name: "Main.jsx",
//         },
//         {
//           name: "map.jsx",
//         },
//       ],
//     },
//     {
//       name: "README.md",
//     },
//   ],
// };

// // loading state -> data fetch 
// // search Filter
// /**
//  * 
//  * @param {
//  * } param0 
//  * @returns 
//  */

// function Entry({ name, children }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   return (
//     <div style={{ marginLeft: "5rem" }}>
//       <button
//         style={{ border: "None", cursor: children ? "pointer" : "default" }}
//         onClick={() => {
//           setIsExpanded(!isExpanded);
//         }}
//       >
//         {name}
      
//         {children && "+ "}
//       </button>
//       {isExpanded &&
//         children &&
//         children.map((file, fileIndex) => <Entry key={fileIndex} {...file} />)}
//     </div>
//   );
// }

// export default function Recursive() {
//   return (
//     <>
//       {files.children.map((file, fileIndex) => (
//         <Entry key={fileIndex} {...file} />
//       ))}
//     </>
//   );
// }



// const controller = new AbortController(); 



// fetch(apir, { 
//   signal: controller.signal
// })

// return () => { 
//   controller.abort()
// }
// // import React from 'react'

// // export default function Parent() {
// //   const [ array, setArray] = useState([])

// //   const deleteFromA = (index) => { 
// //     const newArray = array.filter((_, valueIndex) => {return index !== valueIndex})
// //     setArray(newArray)
// //   }
// //   return (
// //     <div>
// //       {tasks.map((task, taskIndex))}
// //       <Child deleteFunction={deleteFromA} task={task} taskIndex={taskIndex}/> 
// //     </div>
// //   )
// // }


// // import React from 'react'

// // export default function Child({deleteFunction , task, taskIndex}) {
// //   return (
// //     <div>
// //       {task.name}, {task.dueDate}
// //       <button onClick={deleteFunction(taskIndex)}> Delete</button>
// //     </div>
// //   )
// // }



// fetch('', { 
//   method: "POST", 
//   headers: , 
//   body: JSON.stringify(data),
//   signal:
// })
// useEffect(() => {
  
  


//   return () => { 

//     controller.abort()
//   }
// })

// useEffect(() => {
  
//   fetch("apiRoute").then((response) => response.json()).then((data) => setData(data)) 


//   return () => { 
//     controller.abort(); 
//   }
// })
// const controller = new AbortController();
// const submitData = asyc () => { 
//   const response = await fetch("APIendpoint", { 
//     method: "POST", 
//     headers:  { 
      
//       "Content-type" : "application/json", 
//     },
//     body: JSON.stringify(formData),
//     signal: controller.signal 
    
//   })
// }
// const handleChange = (event) =>  { 
//   //Todo: loop thorugh the lines 
//   const {name, value } = event.target; 
//   setFormData((preData) => ({
//     ...preData, [name] : value, 
//   }))
// } 
// import React from 'react'

// export default function InputTesting() {
//   return (
//     <div>
       
//     </div>
//   )
// }



// const [ pin, setPin] = useState("")


// useEffect(() =>  {
//   const debounce = setInterval(() => { 
//     fetch(api).then((response) => {return response.json()}).then((data)=>{setData()}).catch((err) => { console.log(err)})
//   }, 2000)

//   return () => {
//     clearTimeout(debouncing);
//   };
// }, [pin])

// useEffect(() => { 
//   const interval = setInterval(() => { 
//     setMaxListeners(prevLines => { 
//       //TODO: reduce the first item by 1 in each line 
//       return prevLines.map((line) => { 
//         return [line[0] - 1, ...line.slice(1)]
//       })
//     })
//   }, 500)

//   return () => { 
//     clearInterval(interval) //so its not firing over and over again , 
//   }

// }, [] )


// const controller = new AbortController(); 



// //search debouncing functions 
// useEffect(() => { 
//  const debouncing = setTimeout
// }, [searchValue])
// useEffect(() => { 
// const deboucing = setInterval(() => { 
//   fetch(apiUrl + searchValue).then(res).then(data)
// }, 500)

//   return () => { 
//     clearTimeout(deboucing)
//   }
// },  [searchValue])



// import React from 'react'

// export default function Parent() {
//   return (
//     <div>
//       <input type="number" onChange={(e) => setSearchValue(e.currentTarget.valueAsNumber)} />
      
//     </div>
//   )
// }



// import { createContext} from "react"; 

// export const UserData = createContext({}); 
// useContext(userData ) ; 

