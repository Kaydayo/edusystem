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
import { completeCourse } from "../../redux/actions/coursesAction";

type ContentParams = {
  id: number;
  subId: number;
};

const SideNav = () => {
  const [showComment, setShowComment] = useState<boolean>(false);
  const [progressCourse, setProgressCourse] = useState<number>(0);
  const [subProgress, setSubProgress] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState<any>({});
  const [allCourses, setAllCourses] = useState<any>([]);
  const [currentCourseId, setCurrentCourseId] = useState<string>("");

  const { activeCourseIndex, loading, success } = useAppSelector(
    (state: RootState) => state.courses
  );
  const { profileInfo } = useAppSelector((state: RootState) => state.user);
  const { user } = profileInfo;
  // console.log(profileInfo);

  const dispatch = useAppDispatch();

  const courses = user.courses[activeCourseIndex].course;

  const trackProgress = () => {
    // console.log(courses, "oshit");
    let newCourse = courses[progressCourse];
    // console.log(newCourse, "track am");
    setCurrentCourseId(newCourse.constId);
    let newContent = newCourse.contents[subProgress];

    // console.log(newContent, "baba ra am");
    // console.log(newContent);
    setCurrentContent(newContent);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setAllCourses(courses);
    trackProgress();
  }, [subProgress, user]);

  if (loading) {
    console.log("loading", loading);
  }

  const handleContentChange = ({ id, subId }: ContentParams) => {
    // console.log(id, subId);
    setCurrentContent(courses[id].contents[subId]);
  };

  return (
    <div className={courseStyle.sideNav}>
      <div className={courseStyle.navigations}>
        <p className={courseStyle.firstP}>Harassment in the Workplace</p>
        <div className={courseStyle.mainNavs}>
          <CourseAccordion
            subProgress={subProgress}
            progress={progressCourse}
            allCourses={allCourses}
            handleClick={handleContentChange}
          />
        </div>
      </div>

      <div className={courseStyle.videoContent}>
        <div>
          <CourseVideo />
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
                {allCourses && <p>{currentContent.note}</p>}
                <div>
                  <Button
                    className={courseStyle.completeBtn}
                    onClick={() => {
                      if (success) {
                        setSubProgress((prev) => prev + 1);
                      }

                      if (
                        allCourses[progressCourse].contents.length - 1 ===
                          subProgress &&
                        success
                      ) {
                        setProgressCourse((prev) => prev + 1);
                        setSubProgress(0);
                      }

                      trackProgress();

                      //actual
                      dispatch(
                        completeCourse({
                          courseId: currentCourseId,
                          contentId: currentContent.id,
                        })
                      );

                      console.log({
                        id: progressCourse,
                        subId: subProgress,
                      });
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
