import React from 'react'

const VideoCard = ({info}) => {

    const {snippet} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
        </ul>
    </div>
  )
}

export default VideoCard