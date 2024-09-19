// import React from 'react'
// import ComponentC from './ComponentC'

// function ComponentB(props) {
//   return (
//     <div>
//       <div className='box'>
//         <h1>Component B</h1>
//         <ComponentC user = {props.user}/>
//       </div>
//     </div>
//   )
// }

// export default ComponentB


import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div>
      <div className='box'>
        <h1>Component B</h1>
        <ComponentC user />
      </div>
    </div>
  )
}

export default ComponentB
