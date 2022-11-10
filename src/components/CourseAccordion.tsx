import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import accordStyle from "../styles/EmployeeDashboard/EmployeeDashboard.module.css";
import { addZeroToSingle, capitalizeFirstLetter } from "../utils/helper";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";

type ContentParams = {
  id: number;
  subId: number;
};

type FaqProp = {
  allCourses: FaqData[];
  //   index: number;
  progress: number;
  subProgress: number;
  setProgress?: (progress: number) => void;
  handleClick: (data: ContentParams) => void;
};
interface FaqData {
  constId: string;
  name: string;
  step: number;
  contents: ContentCourse[];
}

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
}: FaqProp) => {
  console.log(";progress subtopic", progress, subProgress);
  const [currentView, setCurrentView] = useState<number>(1);
  const [activeArr, setActiveArr] = useState<any>([]);

  useEffect(() => {
    let p = allCourses.map((item, i) =>
      i === progress
        ? { id: i, name: item.name, active: true }
        : { id: i, name: item.name, active: false }
    );
    setActiveArr(p);
  }, [allCourses, progress]);

  const handleDisplayLessons = (course: any) => {
    let ind = activeArr.findIndex((item: any) => item.name === course.name);
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
                progress + 1 === course.step ? accordStyle.accordActive : ""
              }`}
            >
              <h4>{addZeroToSingle(index)}</h4>
              <h4>{capitalizeFirstLetter(course.name)}</h4>
              <div>
                {currentView === index + 1 ||
                activeArr.some(
                  (item: any) => item.name === course.name && item.active
                ) ? (
                  <FaAngleDown
                    onClick={() => {
                      handleDisplayLessons(course);
                      if (currentView === index + 1) {
                        setCurrentView(0);
                      }
                    }}
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => {
                      setCurrentView(index + 1);

                      handleDisplayLessons(course);
                    }}
                  />
                )}
              </div>
            </div>

            {activeArr.some(
              (item: any) => item.name === course.name && item.active
            ) || currentView === index + 1 ? (
              <div className={`${accordStyle.rev}`}>
                {course.contents.map((data: any, i: number) => {
                  return (
                    <div
                      key={data.id}
                      className={accordStyle.accodList}
                      onClick={() => {
                        handleClick({ id: index, subId: i });
                      }}
                      // style={{
                      //   pointerEvents: "none",
                      // }}
                    >
                      <div>
                        {data.complete ? (
                          <AiFillCheckCircle
                            className={accordStyle.accordComplete}
                          />
                        ) : (
                          <GiCircle />
                        )}
                      </div>
                      <div>
                        <p> {capitalizeFirstLetter(data.subTopic)}</p>
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
