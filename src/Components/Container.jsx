import React from 'react'

const Container = ({children}) => {
  return (
    <div className='bg-white
    border rounded-md py-4 px-2 my-2 shadow-sm overflow-hidden '>
        {children}
    </div>
  )
}

export default Container