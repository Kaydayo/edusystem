import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import homeStyle from '../styles/EmployeeDashboard/EmployeeDashboard.module.css'
import "react-circular-progressbar/dist/styles.css";
import Label from '../layouts/Home/Label';
import ProgressProvider from './ProgressProvider';


type ProgressRound = {
    width?: string,
    height?: string,
    value: number,
    hexColor: string,
    label?:string,
}
const RoundProgress = ({width, height,value,hexColor,label}:ProgressRound) => {
  return (
      <div>
          
          <div style={{ width: `${width ? width : 94}px`, height: `${height ? height : 94}px` }}>
              <ProgressProvider valueStart={1} valueEnd={value}>
                  
                  {(value:any) => <CircularProgressbar
                      value={value}
                      text={`${value}%`}
                      styles={{
                          path: {
                              // Path color
                              stroke: `${hexColor}`,
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'round',
                              // Customize transition animation
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              // Rotate the path
                              transform: 'rotate(0.8turn)',
                              transformOrigin: 'center center',
                          },
                          trail: {
                              // Trail color
                              stroke: '#EEF1FF',
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'round',
                              // Rotate the trail
                              transformOrigin: 'center center',
                          },
                          text: {
                              // Text color
                              fill: `${hexColor}`,
                              // Text size
                              fontSize: '20px',
                              textAlign: 'center',
                              float: 'left',
                              marginLeft: '100px'
                          },
                      }
                      }

                  />}
                  
              </ProgressProvider>
          </div>
          
          <div className={homeStyle.progressLabel}>
              <p>{label}</p>
          </div>
    </div>
  )
}

export default RoundProgress