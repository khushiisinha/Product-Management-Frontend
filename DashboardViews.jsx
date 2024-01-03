import React from 'react'

function DashboardViews(props) {
  return (
    <div className='h-1/5 w-1/6 bg-black  border-4 border-white text-white rounded-md flex flex-col justify-center items-center p-4 gap-4'>
       <div className='text-5xl  font-bold '> {props.total}</div>
       <div className='text-xl hover:bg-white hover:text-slate-700 hover:rounded-xl hover:px-1 cursor-pointer font-semibold underline'>{props.title}</div>
    </div>
  )
}

export default DashboardViews