import logoPic2 from '../../../assets/images/Portfolio.jpg';
import './Logo.scss'
import { useEffect, useRef } from 'react'


const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={logoPic2}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
