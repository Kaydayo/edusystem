import React from 'react'
import navStyle from '../styles/Home/Nav.module.css'
import OncultureLogo from '../Assets/Images/onculture-logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'
import {navData} from '../constants/data'

type NavProp = {
    pure?: boolean;
    board?: boolean;
}
const Nav = ({pure, board}:NavProp) => {
    return (
        <div className={`${navStyle.headers} ${pure && navStyle.addShadow}`}>
            <div className={navStyle.logo}>
                <img src={OncultureLogo} alt="onculture logo" />
            </div>
            {!pure && <>
                <div className={navStyle.links}>
                    <ul className={navStyle.linksElement}>
                        {navData.map((navs, index) => (
                            <li key={index}><Link to={navs.to} className={navStyle.linkTo}>{navs.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className={navStyle.buttons}>
                    <div>
                        <Link to='/signup'>
                            <Button className={navStyle.signUpBtn}>
                                Sign up
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/login'>
                            <Button className={navStyle.bookADemo}>
                                Login
                            </Button>
                        </Link>
                    </div>
                    </div>
                </>
            }
           
          
    </div>
  )
}

export default Nav