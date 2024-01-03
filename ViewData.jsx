import React from 'react'

function ViewData(props) {
  return (
    <div className='border-l-8 bg-black text-white hover:bg-white hover:text-black border-blue-600 rounded shadow-lg p-2  '>
        
        <div className='font-extrabold'>{props.title}</div>
        <div>Task Description here {props.description}</div>
        <div className=''>Quantity: <span className=' font-extrabold'> {props.quantity} </span> Pieces</div>
        
        
    </div>
  )
}

export default ViewData