// import React from 'react'
// import ComponentD from './ComponentD'

// function ComponentC(props) {
//   return (
//     <div>
//       <div className='box'>
//         <h1>Component C</h1>
//         <ComponentD user = {props.user}/>

//       </div>
//     </div>
//   )
// }

// export default ComponentC


import React from 'react'
import ComponentD from './ComponentD'
import { useContext } from 'react'
import { userContext } from './ComponentA'

function ComponentC() {

  const user = useContext(userContext);

  return (
    <div>
      <div className='box'>
        <h1>Component C</h1>
        <h2>{`Hello again ${user}`}</h2>
        <ComponentD user />

      </div>
    </div>
  )
}

export default ComponentC

