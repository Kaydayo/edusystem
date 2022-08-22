import React, { useState } from 'react'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import SubscriptionCourse from './SubscriptionCourse'
import {subScriptionCourse}from '../../constants/data' 

const Subscription = () => {
    const [checkTwo, setCheckTwo] = useState<boolean>(false)
    return (
        <div className={companyStyle.admin}>
            <div className={companyStyle.toggleSub}>
                <h4 className={!checkTwo ?  companyStyle.hashCol : ''}>Stay Safe & Culture Clinic <span>(Recommended)</span> </h4>
                <input type="checkbox" id="switch" onClick={() => setCheckTwo(!checkTwo)} /><label htmlFor="switch">Toggle</label>
                <h4 className={checkTwo ? companyStyle.hashCol : ''}>Stay Safe</h4>
            </div>
            <div className={companyStyle.subContent}>
                <div className={companyStyle.popSub}>
                    {subScriptionCourse.filter((courses) => {
                        if (checkTwo) {
                            return !courses.cultureClinic && courses.staySafe && !courses.others
                        } else {
                            return courses.cultureClinic && courses.staySafe && !courses.others
                        }
                    }).map((element, idex) => (
                        <SubscriptionCourse data={element} key={idex} />
                    ))}
                </div>
                <hr className={companyStyle.lines}/>
                <div className={companyStyle.popSubDown}>
                    {subScriptionCourse.filter((courses) => {
                        if (checkTwo) {
                            return !courses.cultureClinic && courses.staySafe && courses.others
                        } else {
                            return courses.cultureClinic && courses.staySafe && courses.others
                        }
                    }).map((element, idex) => (
                        <SubscriptionCourse data={element} key={idex}/>
                    ))}
                </div>
           </div>

        </div>
    )
}

export default Subscription