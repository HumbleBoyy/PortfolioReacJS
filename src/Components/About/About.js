import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss';
import logoPic1 from '../../assets/images/Portfolio2.jpg';
import logoPic2 from '../../assets/images/Portfolio21.jpg';
import Anime from '../animatedLetters/anime';
import { Link } from 'react-router-dom';

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
        <div className="text-zone zone_about">
          <h1 className='aboutme'>
            <Anime
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
       </div>
          <div className='middle_about'>
            <img src={logoPic2} className='personal_image'/>
            <h1 className='myname'>
            <Anime
              letterClass={letterClass}
              strArray={['A', 's', 'a', 'd', 'u',  'l', 'l', 'o', 'h', ' ', 'A', 'b', 'd', 'u', 'r', 'a', 'k', 'h', 'm', 'o', 'n', 'o', 'v']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full-stack developer looking for a role in an
            established <br/> IT company with the opportunity to work with the latest <br/>
            technologies on challenging and diverse projects! 
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on <br/>
            improving my chops one design problem at a time.
          </p>

          <Link to={'/projects'} className='linea'><button className='about_btn'>See my works</button></Link>
          </div>
       

        <div className="stage-cube-cont">
          <div className="cubespinner">
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
      </div>
      <Loader type='ball-spin-fade-loader' />
    </>
  )
}

export default About
