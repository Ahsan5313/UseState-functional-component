import { useState } from 'react'
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'



  function Hello(){

    const [count, countUpdate] = useState(0)


  return(

    <div>
      
      <br></br>
      <br></br>
      <br></br>

       <h2>Clicking Me {count} </h2>
       <button className='btn btn-danger' onClick={() => {countUpdate(count + 1)}}>Click Me</button>

  </div>

  )      
  }

  export default Hello;


