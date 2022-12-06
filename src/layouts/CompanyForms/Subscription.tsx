import React, { useEffect, useState } from 'react'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import SubscriptionCourse, { ISubCourse } from './SubscriptionCourse' 
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { postAllSubscriptions } from '../../redux/subscription'
import { ToastContainer } from 'react-toastify'

const Subscription = () => {
    const [checkTwo, setCheckTwo] = useState<boolean>(false)
    const [sanityCourses, setSanityCourses] = useState<any>([])
    const dispatch = useAppDispatch()

    const { subscriptions } = useAppSelector((state: RootState) => state.subscription)
    console.log(subscriptions, "subscriptions")

    useEffect(() => {
        setSanityCourses(subscriptions)
    }, [subscriptions])
    

   
    

    return (
        <div className={companyStyle.admin}>
            <ToastContainer />
            <div className={companyStyle.toggleSub}>
                <h4 className={!checkTwo ?  companyStyle.hashCol : ''}>Harrassment in the workplace & Culture Clinic <span>(Recommended)</span> </h4>
                <input type="checkbox" id="switch" onClick={() => setCheckTwo(!checkTwo)} /><label htmlFor="switch">Toggle</label>
                <h4 className={checkTwo ? companyStyle.hashCol : ''}>Harrassment in the workplace</h4>
            </div>
            <div className={companyStyle.subContent}>
                <div className={companyStyle.popSub}>
                    {subscriptions.filter((courses) => {
                        if (checkTwo) {
                            return !courses.cultureClinic && courses.harrassment && !courses.others
                        } else {
                            return courses.cultureClinic && courses.harrassment && !courses.others
                        }
                    }).map((element, idex) => (
                        <SubscriptionCourse data={element} key={idex} />
                    ))}
                </div>
                <hr className={companyStyle.lines}/>
                <div className={companyStyle.popSubDown}>
                    {sanityCourses.filter((courses: { cultureClinic: any; harrassment: any; others: any }) => {
                        if (checkTwo) {
                            return !courses.cultureClinic && courses.harrassment && courses.others
                        } else {
                            return courses.cultureClinic && courses.harrassment && courses.others
                        }
                    }).map((element: ISubCourse, idex: React.Key | null | undefined) => (
                        <SubscriptionCourse data={element} key={idex}/>
                    ))}
                </div>
           </div>

        </div>
    )
}

export default Subscription


