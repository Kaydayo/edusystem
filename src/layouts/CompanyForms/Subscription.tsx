import React, { useEffect, useState } from 'react'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import SubscriptionCourse from './SubscriptionCourse' 
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { postAllSubscriptions } from '../../redux/subscription'

const Subscription = () => {
    const [checkTwo, setCheckTwo] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const { subscriptions } = useAppSelector((state: RootState) => state.subscription)
   
   
    

    return (
        <div className={companyStyle.admin}>
            <div className={companyStyle.toggleSub}>
                <h4 className={!checkTwo ?  companyStyle.hashCol : ''}>Harrassment in the workplace & Culture Clinic <span>(Recommended)</span> </h4>
                <input type="checkbox" id="switch" onClick={() => setCheckTwo(!checkTwo)} /><label htmlFor="switch">Toggle</label>
                <h4 className={checkTwo ? companyStyle.hashCol : ''}>Harrassment in the workplace</h4>
            </div>
            <div className={companyStyle.subContent}>
                <div className={companyStyle.popSub}>
                    {subscriptions.filter((courses) => {
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
                    {subscriptions.filter((courses) => {
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

function postAllSubcriptions(subScriptionCourse: { id: string; subscriptionName: string; description: string; information: string[]; price: string; staySafe: boolean; cultureClinic: boolean; others: boolean; noOfSeats: number; amount: number; selected: boolean }[]): any {
    throw new Error('Function not implemented.')
}
