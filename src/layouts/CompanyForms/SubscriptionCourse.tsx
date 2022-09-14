import React, { useState } from 'react'
import { subScriptionCourse } from '../../constants/data'
import { capitalizeFirstLetter } from '../../utils/helper';
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'

export interface ISubCourse {
    subscriptionName: string;
    description: string;
    information: string[];
    price: string;
    staySafe: boolean;
    cultureClinic: boolean;
    others: boolean
}

type SubCourseProp = {
    data: ISubCourse;
}
const SubscriptionCourse = ({ data }: SubCourseProp) => {
    const [click, setClick] = useState<boolean>(false)
    return (
        <div className={companyStyle.boxSub}>
            <div>
                <h4>{capitalizeFirstLetter(data.subscriptionName)}</h4>
                <h3>{capitalizeFirstLetter(data.description)}</h3>
                <ul>
                    {data.information.map((element, index) => (
                        <li key={index}>
                            {capitalizeFirstLetter(element)}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <hr />
                <div className={`${companyStyle.pickBtn} ${click && companyStyle.btnPicked}`}>
                    <p>{data.staySafe && "Harrassment in the workplace"} {data.cultureClinic && "& Culture Clinic"}</p>
                    <button onClick={() => setClick(!click)} >
                        $<span>{data.price}</span>/ per user{click && <span className={companyStyle.checkMark}></span>}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionCourse