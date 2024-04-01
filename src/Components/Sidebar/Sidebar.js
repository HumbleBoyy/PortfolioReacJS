import { Link, NavLink } from 'react-router-dom'
import Logo12 from '../../assets/images/logo12.png'
import Logo22 from '../../assets/images/humbleBoyy.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.scss'
import { useState } from 'react';
const Sidebar = () => {

    const [showNav, setShowNav] = useState();


  return (
    <>
      <div  className='nav-bar'> 
            <Link className='logo' to='/'>
                 <img src={Logo12} alt='Logo'/>
                 {/* <img className="subtitle_logo"src={Logo22} alt='humbleLogo'/> */}
            </Link>
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink
                 onClick={()=> setShowNav(false)}
                exact="true" activeclassname="active" to="/">
                   <FontAwesomeIcon  icon={faHome} color='#000'/>
                </NavLink>

                <NavLink 
                onClick={()=> setShowNav(false)}
                exact="true" className="about-link" activeclassname="active" to="/about">
                   <FontAwesomeIcon  icon={faUser} color="#000"/>
                </NavLink>

                <NavLink 
                onClick={()=> setShowNav(false)}
                exact="true" className="projects-link" activeclassname="active" to="/projects">
                   <FontAwesomeIcon  icon={faSuitcase} color="#000"/>
                </NavLink>

                <NavLink
                onClick={()=> setShowNav(false)}
                 exact="true" className="contact-link" activeclassname="active" to="/contact">
                   <FontAwesomeIcon  icon={faEnvelope} color="#000"/>
                </NavLink> 

                <FontAwesomeIcon
                onClick={()=> setShowNav(false)}
                  icon={faClose}color='#fff'
                  cursor={'pointer'}
                  size='3x'
                  className='closemenu'
                />
                
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} color='#7c7c7c'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' >
                        <FontAwesomeIcon icon={faGithub} color='#7c7c7c'/>
                    </a>
                </li>
                <li>
                    <Link  rel='noreferrer' to='/dashboard'>
                        <FontAwesomeIcon icon={faSkype} color='#7c7c7c'/>
                    </Link>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' >
                        <FontAwesomeIcon icon={faYoutube} color='#7c7c7c'/>
                    </a>
                </li>
            </ul>

            <FontAwesomeIcon
            onClick={()=> setShowNav(true)}
             icon={faBars}
             color='#fff'
             size='3x'
             className='hamburgermenu'
             cursor={'pointer'}
            />
      </div>
    </>
  )
}

export default Sidebar
