import React from 'react'
import Button from '../../components/Button';
import RoundProgress from '../../components/RoundProgress';
import { getColorGrade } from '../../utils/helper';
import employeeStyle from '../../styles/EmployeeDashboard/EmployeeDashboard.module.css'


type EmployeeCourseCardProp = {
    courseTitle: string;
    value: number;
    duration: string;
    timeLeft: string;
    classes: number | string;
    description: string;

}
const EmployeeCourseCard = ({courseTitle, value,duration,timeLeft,classes, description}:EmployeeCourseCardProp) => {
  return (
      <div className={employeeStyle.employeeCourse}>
          <div className={employeeStyle.courseCard}>
              <p>{courseTitle}</p>
          </div>

          <div className={employeeStyle.progressCourse}>
              <RoundProgress
                  value={value}
                  hexColor={getColorGrade(value)}
                  widthHeight={"128"}
              />
              <p>{description}</p>
          </div>

          <div className={employeeStyle.trackProgress}> 
              <div className={employeeStyle.perTrack}>
                  <p>Duration</p>
                  <p>{duration}</p>
              </div>

              <div className={employeeStyle.perTrack}>
                  <p>Time left</p>
                  <p>{timeLeft}</p>
              </div>

              <div className={employeeStyle.perTrack}>
                  <p>Classes</p>
                  <p>{classes}</p>
              </div>
          </div>

          <Button className={employeeStyle.contBtn}>
              Continue
          </Button>
    </div>
  )
}

export default EmployeeCourseCard