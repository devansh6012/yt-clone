import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Cricket", "Live"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonList