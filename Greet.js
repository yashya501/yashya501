import React from 'react'

//*********************** Functinal component **********************/

function Greet (props) {
  return <h3> Welcome to functional components 
  <br></br>
  --{props.name} as Marvels {props.heroName}--
  <br></br>
  
  </h3>
  
}
 export default Greet