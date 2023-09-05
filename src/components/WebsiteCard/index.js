import React from 'react'
import './index.scss'
const WebsiteCard = ({img,name,link,disc}) => {
  return (
    <a target='blank' href={link}>
        <div className='card'>
            <img src={img}/>
            <h1>{name}</h1>
            <p>{disc}</p>
        </div>
    </a>
  )
}

export default WebsiteCard