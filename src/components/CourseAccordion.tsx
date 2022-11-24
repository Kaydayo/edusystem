import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import accordStyle from "../styles/EmployeeDashboard/EmployeeDashboard.module.css";
import { addZeroToSingle, capitalizeFirstLetter } from "../utils/helper";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import { ProgressType } from "../layouts/EmployeeDashboard/SideNav";
import { RootState, useAppSelector } from "../redux/store";

type ContentParams = {
  id: number;
  subId: number;
};

type FaqProp = {
  allCourses: any[];
  // allCourses: FaqData[];
  //   index: number;
  progress: ProgressType;
  subProgress: number;
  setProgress: (progress: ProgressType) => void;
  handleClick: (data: ContentParams) => void;
  setCurrentLesson: (id: string) => void;
  currentLesson: string;
};
// interface FaqData {
//   constId: string;
//   name: string;
//   step: number;
//   contents: ContentCourse[];
// }

interface ContentCourse {
  id: string;
  subTopic: string;
  step: number;
  media: string;
  note: string;
  completed: boolean;
}

const CourseAccordion = ({
  allCourses,
  progress,
  subProgress,
  handleClick,
  setCurrentLesson,
  currentLesson,
  setProgress,
}: FaqProp) => {
  console.log(";progress subtopic", progress, subProgress);
  const [currentView, setCurrentView] = useState<number>(1);
  const [currentModule, setCurrentModule] = useState<number>(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [activeArr, setActiveArr] = useState<any>([]);
  const [markCureent, setMarkCurrent] = useState<boolean>(false);
  // const [dropAccodIcon, setDropAccodIcon] = useState<boolean>(true);

  const { userInfo, userToken, profileInfo } = useAppSelector(
    (state: RootState) => state.user
  );
  // useEffect(() => {
  //   let p = allCourses.map((item, i) =>
  //     i === progress
  //       ? { id: i, name: item.name, active: true }
  //       : { id: i, name: item.name, active: false }
  //   );
  //   setActiveArr(p);
  // }, [allCourses, progress]);

  useEffect(() => {
    let p = allCourses.map((item, i) =>
      i === progress.moduleIndex
        ? { id: i, active: true }
        : { id: i, active: false }
    );
    setActiveArr(p);
  }, [allCourses]);

  const handleDisplayLessons = (index: number) => {
    let ind = activeArr.findIndex((item: any) => item.id === index);
    let upd = [...activeArr];
    upd[ind].active = !upd[ind].active;
    setActiveArr(upd);
  };

  return (
    <div className={`${accordStyle.accordMain}`}>
      {allCourses.map((course, index) => {
        return (
          <div key={index}>
            <div
              className={`${accordStyle.accordTitle} ${
                progress.moduleIndex === index ? accordStyle.accordActive : ""
              }`}

              // onClick={() => {
              //   setProgress({
              //     ...progress,
              //     moduleIndex: index,
              //     lessonId: course.lesson[0]._id,
              //     lessonIndex: 0
              //   })
              //   if (index === progress.moduleIndex) {
              //     setDropAccodIcon(!dropAccodIcon);
              //   } else {
              //     setDropAccodIcon(true);
              //   }
              // }}
            >
              <div className={accordStyle.accordNum}>
                <h4>{addZeroToSingle(index)}</h4>

                <h4>{course.moduleTitle} </h4>
              </div>
              <div>
                {/* {dropAccodIcon && progress.moduleIndex === index ? ( */}
                {activeArr.some(
                  (item: any) => item.id === index && item.active
                ) ? (
                  <FaAngleDown
                    onClick={() => {
                      handleDisplayLessons(index);
                    }}
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => {
                      handleDisplayLessons(index);
                    }}
                  />
                )}
              </div>
            </div>

            {activeArr.some((item: any) => item.id === index && item.active) ||
            (progress.moduleIndex === index &&
              activeArr.some(
                (item: any) => item.id === index && item.active
              )) ? (
              <div className={`${accordStyle.rev}`}>
                {course.lesson.map((data: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className={`${accordStyle.accodList} ${
                        data._id === progress.lessonId && accordStyle.revMark
                      }`}
                      onClick={() => {
                        // console.log("i clickced", data._id)
                        // handleClick({ id: index, subId: i });
                        // setMarkCurrent(!markCureent)
                        // setCurrentLesson(data._id)
                        // setCurrentModule(index)
                        // setCurrentLessonIndex(i)
                        setProgress({
                          ...progress,
                          moduleIndex: index,
                          lessonId: data._id,
                          lessonIndex: i,
                        });
                      }}
                      // style={{
                      //   pointerEvents: "none",
                      // }}
                    >
                      <div>
                        {profileInfo.user.completedCourse.includes(data._id) ? (
                          <AiFillCheckCircle
                            className={accordStyle.accordComplete}
                          />
                        ) : (
                          <GiCircle />
                        )}
                      </div>
                      <div className={accordStyle.lessonText}>
                        <p> {capitalizeFirstLetter(data.lessonTitle)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseAccordion;
