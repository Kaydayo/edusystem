import React, { useState } from 'react'
import Accordion from '../../components/Accordion'
import CourseAccordion from '../../components/CourseAccordion'
import CourseVideo from '../../components/CourseVideo'
import Video from '../../components/Video'
import { courseContent } from '../../constants/data'
import courseStyle from '../../styles/EmployeeDashboard/CoursePage.module.css'
import { addZeroToSingle, capitalizeFirstLetter } from '../../utils/helper'
import { RiChat1Line } from 'react-icons/ri'
import SpecialButton from '../../components/SpecialButton'
import CustomComment from '../../components/CustomComment'
import Button from '../../components/Button'


const SideNav = () => {
    const [showComment, setShowComment] = useState<boolean>(false)
    const [progressCourse, setProgressCourse] = useState<number>(0)
    const [subProgress, setSubProgress] = useState<number>(0)

    console.log(progressCourse, subProgress, 'check am')

    return (
        <div className={courseStyle.sideNav}>
            <div className={courseStyle.navigations}>
                <p className={courseStyle.firstP}>Harassment in the Workplace</p>
                <div className={courseStyle.mainNavs}>
                    {courseContent.sort((a, b) => a.step - b.step).map((item: any, index) => {
                        return <CourseAccordion data={item} index={index}  progress={progressCourse}/>
                    })}
                </div>
            </div>

            <div className={courseStyle.videoContent}>
                <div>
                    <CourseVideo />
                </div>
                <div className={courseStyle.chatBtns}>
                    <SpecialButton className={courseStyle.commentBtn} onClick={() => setShowComment(true)}>
                        <div className={courseStyle.comment}>
                            <RiChat1Line />
                            <p>Comment</p>
                            
                        </div>
                    </SpecialButton>
                    {showComment && <SpecialButton className={courseStyle.commentBack} onClick={()=> setShowComment(false)}>
                        <p>Back</p>
                    </SpecialButton>}
                </div>
                <div className={courseStyle.commentBox}>
                    {showComment ? <CustomComment /> :
                        <div className={courseStyle.contentText}>
                            <p>{courseContent[progressCourse].contents[subProgress].note}</p>
                            <div>
                                <Button className={courseStyle.completeBtn} >
                                    Complete
                                </Button>
                            </div>
                        </div>}
                </div>
            </div>
        </div >
    )
}

export default SideNav