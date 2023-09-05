import React, { useEffect, useState } from 'react'
import website1 from '../../assets/images/website1.png'
import website2 from '../../assets/images/website2.png'
import website3 from '../../assets/images/website3.png'
import website4 from '../../assets/images/website4.png'
import WebsiteCard from '../WebsiteCard'
import './index.scss'
import AnimatedLetters from '../AnimateLetters'
const WebSites = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className='container websites-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['W','E','B','S','I','T','E','S']}
            idx={15}
          />
        </h1>
      </div>
      <div className='part'>
        <WebsiteCard 
         img={website1} 
         name={"ALI MUSIC APP "}
         link={"https://ali-music-clone.netlify.app"}
         disc={"In this app I learned how to use APIs and how to integrate it with a react app using RapiAPi also I have learned how to use tailwind css for styling .It's an app that shows you songs, artists,top song in the world etc."}
        />
        <WebsiteCard 
          img={website2} 
          name={"AT TUBE APP "}
          link={"https://atube-clone.netlify.app"}
          disc={"This app is a clone for youtube app I have used the youtube v3 open source API using MUI materials for styling."}
        />
      </div>
      <div className='part'>
        <WebsiteCard 
          img={website3} 
          name={"ALI GYM APP"}
          link={"https://aligym1.netlify.app"}
          disc={"THis is an app that shows you all exercises based on (muscle name,tool name,body part,... etc).It is build uisng React.js with tailwind css."}
        />
        <WebsiteCard 
          img={website4} 
          name={"ALI STORE APP"}
          link={"https://ecommerce-xhqd.vercel.app/"}
          disc={"THis project is build with NEXT.JS and SANITY to store the data base and makeing changes on it."}
        />
      </div>
      
    </div>
  )
}

export default WebSites