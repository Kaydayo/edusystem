import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiCircle } from 'react-icons/gi';
import accordStyle from "../styles/EmployeeDashboard/EmployeeDashboard.module.css";
import { capitalizeFirstLetter } from '../utils/helper';

type CourseTitleProps = {
    complete: boolean,
    lessonTitle: string
}

const CourseTitle = ({ complete, lessonTitle }: CourseTitleProps) => {
    const [markCureent, setMarkCurrent] = useState<boolean>(false)
    return (<div className={`${markCureent && accordStyle.revMark}`} onClick={()=>setMarkCurrent(!markCureent)}>
        <div>
            {complete ? (
                <AiFillCheckCircle
                    className={accordStyle.accordComplete}
                />
            ) : (
                <GiCircle />
            )}
        </div>
        <div>
            <p> {capitalizeFirstLetter(lessonTitle)}</p>
        </div>
    </div>

    )
}

export default CourseTitle