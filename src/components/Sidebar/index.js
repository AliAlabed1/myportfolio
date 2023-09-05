import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faFirefoxBrowser,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="certificate-link"
          to="/certificate"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faCertificate} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="websites-link"
          to="/websites"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFirefoxBrowser} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ali-alabed-27b9b5256/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
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
              color="#4d4d4e"
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
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar