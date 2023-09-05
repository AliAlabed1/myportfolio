import AnimatedLetters from '../AnimateLetters'
import './index.scss'
import React, { useEffect, useState } from 'react'
import certificates from '../../data/crtificates.json'
import certificate from '../../assets/images/certifcate.webp'
const Certificates = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  console.log(certificates)
  return (
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['H','e','r','e',' ','A','r','e',' ','S','o','m','e',' ']}
            idx={15}
          />
          <br></br>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','e','r','t','i','f','i','c','a','t','e','s']}
            idx={15}
          />
        </h1>
        <p>
          Bellow you will find some certifactes that I've got with coursera in diffirent fields such as
          React.js , Neural Networks ,Deep Learning .... etc.
        </p>
      </div>
      <div className='cer'>
        {
          certificates.certificates.map((obj,idx)=>{
            return(
              <div className='certificate-card' key={idx}>
                <a target='blank' href={obj.link}>
                  <img src={certificate} alt='course-img'/>
                </a>
                <div className='certificate-info'>
                  <h4>{obj.course}</h4>
                  <h6>{obj.date}</h6>
                  <p className='skills'>
                    Skills in this course:
                    <p >
                      {obj.skills}
                    </p>
                  </p>
                </div>
              </div>

            )
          })
        }
      </div>
        
    </div>
  )
}

export default Certificates