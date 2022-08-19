import React from 'react'
import navStyle from '../styles/Home/Nav.module.css'
import OncultureLogo from '../Assets/Images/onculture-logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'
import {navData} from '../constants/data'

const Nav = () => {
    return (
        <div className={navStyle.headers}>
            <div className={navStyle.logo}>
                <img src={OncultureLogo} alt="onculture logo" />
            </div>
            <div className={navStyle.links}>
                <ul className={navStyle.linksElement}>
                    {navData.map(navs => (
                        <li><Link to={navs.to} className={navStyle.linkTo}>{navs.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className={navStyle.buttons}>
                <div>
                    <Button className={navStyle.signUpBtn}>Sign up</Button>
                </div>
                <div>
                    <Button className={navStyle.bookADemo}>Book a demo</Button>
                </div>
            </div>
          
    </div>
  )
}

export default Nav