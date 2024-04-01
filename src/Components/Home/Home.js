import React, { useEffect, useState } from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import Anime from '../animatedLetters/anime'
import Logo from './logoPic/Logo'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A', 's', 'a', 'd', 'u', 'l', 'l', 'o', 'h'];
    const jobArray = ['F', 'u', 'l', 'l', '-', 'S', 't', 'a', 'c', 'k', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '!'];

    useEffect(()=> {
        setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
  return (
    <>
       <div className='container home-page'>
             <div className='text-zone'>
                 <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>l</span>
                    <span className={`${letterClass} _15`}>o</span>
                    <br/>
                    <span className={`${letterClass} _16`}>I</span>
                    <span className={`${letterClass} _17`}>'m</span>
                     {'   '}
                 <Anime letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                 />
                 <br/>
                 <Anime letterClass={letterClass}
                  strArray={jobArray}
                  idx={22}
                 />
                </h1>
                <h2>Technologies/ JavaScript/ Html / Css / Node.JS</h2>
                <Link to="/about" className='contact_button'>About me</Link>
             </div>
             <div className="stage-cube-container">
             <div className="cubespinner_cubik">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
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
             <Logo/>
       </div>
       <Loader type='ball-spin-fade-loader' />
    </>
  )
}

export default Home
