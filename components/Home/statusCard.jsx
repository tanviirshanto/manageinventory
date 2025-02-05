import React from 'react'

const StatusCard = ({name,p1,p2}) => {
  return (
      <div className='rounded-2xl shadow-lg p-5 flex flex-col items-center gap-3 w-full lg:w-36'>
      <h1 className='text-xl lg:text-2xl font-bold text-purple-500 '>{p1 }</h1>
      <h1 className='text-sm'>{p2 }</h1>
      <h1 className='font-semibold text-[16px]'>{name}</h1>
    </div>
  )
}

export default StatusCard