//prop drilling example
// import React, { useState } from 'react'
// import ComponentB from './ComponentB'

// function ComponentA() {

//     const [user, setUser] = useState("Hisham")
//   return (
//     <div>
//       <div className='box'>
//         <h1>Component A</h1>
//         <h2>{`Hello ${user}`}</h2>
//         <ComponentB user = {user}/> 
//       </div>
//     </div>
//   )
// }

// export default ComponentA



//useComtext
import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'


export const userContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Hisham")
  return (
    <div>
      <div className='box'>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>

        <userContext.Provider value={user}>
            <ComponentB />
        </userContext.Provider>
      </div>
    </div>
  )
}

export default ComponentA
