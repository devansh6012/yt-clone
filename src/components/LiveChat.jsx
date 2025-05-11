import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate, count } from "random-words";


const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            // console.log("API Polling");

            dispatch(addMessage({
                name: generate({ minLength: 3 }),
                message: generate({ exactly: 1, wordsPerString: 3, separator: " " })[0]
            }))

        }, 500);

        return () => clearInterval(i);

    }, []);

  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
        ))}    
    </div>
  )
}

export default LiveChat