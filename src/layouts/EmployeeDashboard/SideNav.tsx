import React, { useEffect, useState } from "react";
// import Accordion from "../../components/Accordion";
import CourseAccordion from "../../components/CourseAccordion";
import CourseVideo from "../../components/CourseVideo";
import Video from "../../components/Video";
// import { courseContent } from "../../constants/data";
import courseStyle from "../../styles/EmployeeDashboard/CoursePage.module.css";
import { RiChat1Line } from "react-icons/ri";
import SpecialButton from "../../components/SpecialButton";
import CustomComment from "../../components/CustomComment";
import Button from "../../components/Button";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { completeCourse, completeCourseSanity } from "../../redux/actions/coursesAction";
// import { courseModules, postBody } from "../../constants/data";
import urlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react'
import PortableTextComponents from "./PortableTextComponents";
import { Player, PosterImage } from 'video-react'
import ReactPlayer from 'react-player'
import videoStyle from '../../styles/Home/Video.module.css'
import videoPoster from '../../Assets/Images/courseVideoPoster.svg'
import axios from "axios";

type ContentParams = {
  id: number;
  subId: number;
};


export type ProgressType = {
  moduleIndex: number;
  lessonIndex: number;
  lessonId: string;
}

const SideNav = () => {
  const [showComment, setShowComment] = useState<boolean>(false);
  const [courseTitle, setCourseTitle] = useState<string>("");
  const [subProgress, setSubProgress] = useState<number>(0);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [postBody, setPostBody] = useState<any>([])
  const [allCourses, setAllCourses] = useState<any>([]);
  const [currentCourseId, setCurrentCourseId] = useState<string>("");
  const [progress, setProgress] = useState<ProgressType>({moduleIndex:0, lessonIndex:0, lessonId:""})

  const { userInfo, userToken, profileInfo } = useAppSelector((state: RootState) => state.user)
  const serializer = {
    types: {
      image: (props: any) => <div>
      
      </div>

    }
  }

  const { activeCourseIndex, loading, success } = useAppSelector(
    (state: RootState) => state.courses
  );


  const dispatch = useAppDispatch();

  const getCourseModule = async () => {
    const { data } = await axios.get(`subscription/getCourse/${profileInfo.user.courses[0].sanityId}`)
    console.log(data, "DATA")
    setAllCourses(data.module);
    setCourseTitle(data.title)
    setProgress({ moduleIndex: 0, lessonIndex: 0, lessonId: data.module[0].lesson[0]._id });
  }

  const getCourseLesson = async () => {
    const { data } = await axios.get(`subscription/getLesson/${progress.lessonId}`)
    setPostBody(data.body)
    if (data.videoUrl) {
      setCurrentVideo(data.videoUrl)
    } else {
      setCurrentVideo("")
    }
    

  }
  

  

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourseModule()
   console.log(allCourses, "ALL COIRSES")
    // setAllCourses(courseModules);
    

  }, []);

  useEffect(() => {
    getCourseLesson()
    
  }, [progress])

  if (loading) {
    console.log("loading", loading);
  }

  console.log(progress,"PROGRESS ")
  const handleContentChange = ({ id, subId }: ContentParams) => {
    // console.log(id, subId);
    // setCurrentContent(courses[id].contents[subId]);
  };

  return (
    <div className={courseStyle.sideNav}>
      <div className={courseStyle.navigations}>
        <p className={courseStyle.firstP}>{courseTitle}</p>
        <div className={courseStyle.mainNavs}>
          <CourseAccordion
            subProgress={subProgress}
            progress={progress}
            setProgress={setProgress}
            allCourses={allCourses}
            handleClick={handleContentChange}
            setCurrentLesson={setCurrentCourseId}
            currentLesson={currentCourseId}

          />
        </div>
      </div>

      <div className={courseStyle.videoContent}>
        <div className={videoStyle.container}>
          {/* <CourseVideo /> */}
          <div className={videoStyle.courseVideo}>
            {currentVideo && <ReactPlayer url={currentVideo}
              config={{ youtube: { playerVars: { disablekb: 1 } } }}
              width='100%'
              height='28rem'
            // light={videoPoster}
            />}
          </div>
        </div>

        <div className={courseStyle.contentContainer}>
          <div className={courseStyle.chatBtns}>
            <SpecialButton
              className={courseStyle.commentBtn}
              onClick={() => setShowComment(true)}
            >
              <div className={courseStyle.comment}>
                <RiChat1Line />
                <p>Comment</p>
              </div>
            </SpecialButton>
            {showComment && (
              <SpecialButton
                className={courseStyle.commentBack}
                onClick={() => setShowComment(false)}
              >
                <p>Back</p>
              </SpecialButton>
            )}
          </div>
          <div className={courseStyle.commentBox}>
            {showComment ? (
              <CustomComment />
            ) : (
              <div className={courseStyle.contentText}>
                {allCourses && <div>
                    <PortableText
                      value={postBody}
                      components={PortableTextComponents}
                  />
                </div>
                }
                <div>
                  <Button
                    className={courseStyle.completeBtn}
                    onClick={() => {
                      if (progress.moduleIndex + 1 === allCourses.length
                        && progress.lessonIndex + 1 === allCourses[progress.moduleIndex].lesson.length) {
                        setProgress({
                          ...progress,
                          moduleIndex: 0,
                          lessonIndex: 0,
                          lessonId: allCourses[0].lesson[0]._id
                        })
                      } else {
                        if (progress.lessonIndex + 1 === allCourses[progress.moduleIndex].lesson.length) {
                          setProgress(
                            {
                              ...progress,
                              moduleIndex: progress.moduleIndex +1,
                              lessonIndex:0,
                              lessonId: allCourses[progress.moduleIndex + 1].lesson[0]._id
                            })
                        } else {
                          setProgress(
                            {
                              ...progress,
                              lessonIndex: progress.lessonIndex + 1,
                              lessonId: allCourses[progress.moduleIndex].lesson[progress.lessonIndex + 1]._id
                            })
                        }
                      
                      }

                      dispatch(completeCourseSanity(progress))
                    }}
                    // disabled={currentContent.complete}
                  >
                    Complete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
