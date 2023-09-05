import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimateLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
 
    emailjs
      .sendForm('service_4lo1jgq', 'template_61kbswe', form.current, 'mAz-jH3-FPA9Q3A8n')
      .then(
        () => {
          alert('Message successfully sent!')
          
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
      document.getElementById("form").reset()
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
            <p>+963 980 964 931</p>
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} id="form">
              <div style={{display:'flex',gap:'3px'}}>
                <input placeholder='Name' type='text' name='name' required/>
                <input placeholder='Email' type='email' name='email' required/>
              </div>
              <div>
                <input placeholder='Subject' type='text' name='subject' required/>
              </div>
              <div>
                <textarea placeholder='Message' type='text' name='message' required/>
              </div>
              <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact