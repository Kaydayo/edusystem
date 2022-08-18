import React, {useState} from 'react'
import tagImage from '../Assets/Images/tags.png'
import Button from './Button'
import tagsStyle from '../styles/Tags.module.css'
type TagProps = {
    mainTxt: string,
    subText: string;

}
const Tags = ({mainTxt, subText}:TagProps) => {
    const [hover, setHover] = useState<boolean>(true)
  return (
      <div className={tagsStyle.main}
          onMouseEnter={() => setHover(false)}
          onMouseLeave={()=>setHover(true)}>
          <div className={tagsStyle.tagImage}>
              <img src={tagImage} alt="onculture-tag-image" />
          </div>
          <div className={tagsStyle.txt}>
              <div className={tagsStyle.txtContent}>
                   <h4 className={tagsStyle.mkbold}>{mainTxt}</h4>
                    <h5 className={ hover ? tagsStyle.hoverEfx : tagsStyle.counterHoverEfx}>{subText}</h5>
             </div>
              <Button className={hover ? `${tagsStyle.btn} ${tagsStyle.btnHoverEfx}` : `${tagsStyle.btn} ${tagsStyle.btnHoverEfxCnt}` }>
                  see details
              </Button>
          </div>
    </div>
  )
}

export default Tags