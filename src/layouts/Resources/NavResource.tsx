import React, { useState } from 'react'
import resStyle from '../../styles/Resource/Resource.module.css'
import { resourceLinks } from '../../constants/data'
import { NavLink } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/helper'


const NavResource = () => {
    const [curr, setCurr] = useState<string>('')
  return (
        <div className={resStyle.linkResource}>
            {resourceLinks.map((boardNavs, index) => (
                <NavLink to={`/resource/${boardNavs}`}
                    onClick={() => setCurr(boardNavs)}
                    key={index}
                    className={({ isActive }) => (isActive ? `${resStyle.linkRes} ${resStyle.hoverLink}` : `${resStyle.linkRes}`)}
                 
                >
                    {capitalizeFirstLetter(boardNavs)}
                </NavLink>
            ))}
        </div>
  )
}

export default NavResource