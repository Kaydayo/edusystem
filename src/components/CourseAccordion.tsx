import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import accordStyle from '../styles/EmployeeDashboard/EmployeeDashboard.module.css'
import { addZeroToSingle, capitalizeFirstLetter } from '../utils/helper'
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiCircle } from 'react-icons/gi';

type FaqProp = {
    data: FaqData,
    index: number,
}
interface FaqData {
    constId: string,
    name: string,
    step: number,
    contents: ContentCourse[]
}

interface ContentCourse {
    id: string,
    subTopic: string,
    step: number,
    media: string,
    note: string
}

const CourseAccordion = ({ data, index }: FaqProp) => {
    const [clicked, setClicked] = useState<boolean>(false)
    return (
        <div className={`${accordStyle.accordMain}`}>
            <div className={`${accordStyle.accordTitle} ${clicked ? accordStyle.accordActive : ''}`}>
                <h4>{addZeroToSingle(index)}</h4>
                <h4>{capitalizeFirstLetter(data.name)}</h4>
                <div>
                    {clicked ? <FaAngleDown onClick={() => setClicked(!clicked)} /> : <FaAngleUp onClick={() => setClicked(!clicked)} />}
                </div>
            </div>
            <div className={`${accordStyle.accodContent} ${clicked ? accordStyle.rev : ''}`}>
                {clicked && data.contents.sort((a: any, b: any) => a.step - b.step).map((data: any) => {
                    return (<div key={data.id} className={accordStyle.accodList}>
                        <div>
                            {data.completed?<AiFillCheckCircle className={accordStyle.accordComplete}/>:<GiCircle />}
                        </div>
                        <div>
                            <p> {capitalizeFirstLetter(data.subTopic)}</p>
                       </div>
                    </div>)
                })
                }
            </div>
        </div>
    )

}

export default CourseAccordion

