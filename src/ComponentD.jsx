// import React from 'react'

// function ComponentD(props) {
//   return (
//     <div>
//       <div className='box'>
//         <h1>Component D</h1>
//         <h2>{`Bye ${props.user}`}</h2>   {/* here user is passed from Component A through B, C. this is an example for prop drilling */}
//       </div>
//     </div>
//   )
// }




import React from 'react'
import { useContext } from 'react'
import { userContext } from './ComponentA'

function ComponentD() {

  const user = useContext(userContext);

  return (
    <div>
      <div className='box'>
        <h1>Component D</h1>
        <h2>{`Bye ${user}`}</h2>  {/* here user is pass directly from A to D without drilling using useContext */}
      </div>
    </div>
  )
}

export default ComponentD

