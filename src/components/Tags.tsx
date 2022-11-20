import React, { useState } from "react";
import tagImae from "../Assets/Images/tags.png";
import Button from "./Button";
import tagsStyle from "../styles/Home/Tags.module.css";
type TagProps = {
  mainTxt: string;
  subText: string;
};
const Tags = ({ mainTxt, subText }: TagProps) => {
  //   const [hover, setHover] = useState<boolean>(true);
  return (
    //   <div className={tagsStyle.main}
    //       onMouseEnter={() => setHover(false)}
    //       onMouseLeave={()=>setHover(true)}>
    //       <div className={tagsStyle.tagImage}>
    //           <img src={tagImae} alt="onculture-tag" />
    //       </div>
    //       <div className={tagsStyle.txt}>
    //           <div className={tagsStyle.txtContent}>
    //                <h4 className={tagsStyle.mkbold}>{mainTxt}</h4>
    //                 <h5 className={ hover ? tagsStyle.hoverEfx : tagsStyle.counterHoverEfx}>{subText}</h5>
    //          </div>
    //           <Button className={hover ? `${tagsStyle.btn} ${tagsStyle.btnHoverEfx}` : `${tagsStyle.btn} ${tagsStyle.btnHoverEfxCnt}` }>
    //               see details
    //           </Button>
    //       </div>
    // </div>
    <div className={tagsStyle.main}>
      <div className={tagsStyle.tagImage}>
        <img src={tagImae} alt="onculture-tag" />
      </div>
      <div className={tagsStyle.txtContent}>
        <div>
          <h4>{mainTxt}</h4>
          <h5>{subText}</h5>
        </div>
        <Button className={tagsStyle.contentBtn}>See details</Button>
      </div>
    </div>
  );
};

export default Tags;
