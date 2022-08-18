import React, {useState} from 'react'
import groupIcon from '../Assets/Images/group-icon.png'
import boxStyle from '../styles/Box.module.css'

type BoxProp = {
    data: {head: string, content:string}
}


const Box = ({ data }: BoxProp) => {
    const [hover, setHover] = useState<boolean>(false)
  return (
      <div
          className={`${boxStyle.mainBox} ${hover && boxStyle.boxHoverEfx}`}
        onMouseEnter={() => setHover(true)}
          onMouseLeave={()=>setHover(false)}>
          <div className={`${boxStyle.boxSub}`}>
              <img className={`${hover ? boxStyle.moveUp : boxStyle.restore}`} src={groupIcon} alt="onculture group icon" />
              <h2 className={`${hover ? boxStyle.move: boxStyle.resDown}`}>
                  {data.head}
              </h2>
             </div>
          {hover && <div className={boxStyle.moveDown}>
              {data.content}
          </div>}
          
  </div>
  )
}

export default Box