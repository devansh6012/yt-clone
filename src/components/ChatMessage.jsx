import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center p-2'>
        <img
          className="h-6"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JnQ9na8gQRbuCAWGniTCqlVbcKSHW8U_Zw&s"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage