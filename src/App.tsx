// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App({name = "shubham" }:{name?:string} )
// {
//   return (
//     <h1 className='app'>{name} </h1>
  
//   )
// }
//  {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// function App(){
//   const [count,setCount] = useState(0)
//   return(
//     <div className='app'>
//       <h1 className=''>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>

//     </div>
//   )
// }

// export default App

import { useState } from "react";

function App() {
  const [data, setData] = useState<{ name: string } | null>(null);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const json = await res.json();
      setData({ name: json.name });  // ✅ set object, not string
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="app">
      {data && <h1>{data.name}</h1>}
      <button onClick={fetchUser}>fetch User</button>
    </div>
  );
}

export default App;
