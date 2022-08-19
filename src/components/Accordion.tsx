import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import accordStyle from '../styles/FAQ/Accordion.module.css'


type FaqProp = {
    data: FaqData
}
interface FaqData {
    title: string,
    content: string
}
const Accordion = ({ data }: FaqProp) => {
    const [clicked, setClicked] = useState<boolean>(false)
    return (
        <div className={accordStyle.main} onClick={() => setClicked(!clicked)}>
            <div className={accordStyle.title}>
                <h4>{data.title}</h4>
                <div>
                    {clicked ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
             <div className={`${accordStyle.accodContent} ${clicked ? accordStyle.rev: ''}`}>
                {clicked && <p>{data.content}</p>}
            </div>
        </div>
    )
}

export default Accordion