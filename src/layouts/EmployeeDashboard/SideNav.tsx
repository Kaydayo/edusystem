import React, { useEffect, useState } from 'react'
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
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { completeCourse } from '../../redux/courses'


const SideNav = () => {
    const [showComment, setShowComment] = useState<boolean>(false)
    const [progressCourse, setProgressCourse] = useState<number>(0)
    const [subProgress, setSubProgress] = useState<number>(0)
    const [currentContent, setCurrentContent] = useState<any>({})
    const [allCourses, setAllCourses] = useState<any>([])
    
    // const { courses } = useAppSelector((state: RootState) => state.courses)
    const { profileInfo } = useAppSelector((state: RootState) => state.user)
    const { user } = profileInfo
    const courses = user.courses[0].course
    const dispatch = useAppDispatch()

    

    const trackProgress = () => {
        console.log(courses,"oshit")
        let newCourse = courses[progressCourse]
        console.log(newCourse,"track am")
        let newContent = newCourse.contents[subProgress]
        console.log(newContent, "baba ra am")
        console.log(newContent)
        setCurrentContent(newContent)
    }
    
    useEffect(() => {
        trackProgress()

        window.scrollTo(0,0)

        setAllCourses(courses)
    },[courses, dispatch, progressCourse])
    

    return (
        <div className={courseStyle.sideNav}>
            <div className={courseStyle.navigations}>
                <p className={courseStyle.firstP}>Harassment in the Workplace</p>
                <div className={courseStyle.mainNavs}>
                    {allCourses.map((item: any, index:any) => {
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
                            <p>{currentContent.note}</p>
                            <div>
                                <Button className={courseStyle.completeBtn} onClick={() => {
                                    if (subProgress + 1 === courses[progressCourse].contents.length) {
                                        setProgressCourse(progressCourse + 1)
                                        setSubProgress(0)
                                        
                                    } else if (progressCourse + 1 === courses.length) {
                                        if (subProgress + 1 === courses[progressCourse].contents.length) {
                                            setProgressCourse(0)
                                            setSubProgress(0)
                                        } else {
                                            setProgressCourse(0)
                                            setSubProgress(0)
                                        }
                                        
                                    } else {
                                        setSubProgress(subProgress + 1)
                                    }
                                    trackProgress()
                                    dispatch(completeCourse({ id:progressCourse,subId: subProgress}))
                                    
                                }}>
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