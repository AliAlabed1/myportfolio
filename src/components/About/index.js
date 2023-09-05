import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimateLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <br/>
          <p>
            Also I have a good knowledge in AI techniques such as computer vision and Neural Networks.
            I believe that AI is the most strong tool these days and we should integrate softwares with AI to make life easier. 
          </p>
          <div className='social'>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ali-alabed-27b9b5256/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#fff"
                  className="anchor-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AliAlabed1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color="#fff"
                  className="anchor-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ali.alabed.568"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="#fff"
                  className="anchor-icon"
                  
                />
              </a>
            </li>
         </ul>
        </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About