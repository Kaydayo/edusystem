import React, { useEffect, useState } from 'react'
import { subScriptionCourse } from '../../constants/data'
import { capitalizeFirstLetter } from '../../utils/helper';
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import { useAppDispatch } from '../../redux/store';
import { addCourseToSelectList } from '../../redux/subscription';

export interface ISubCourse {
    id: string;
    subscriptionName: string;
    description: string;
    information: string[];
    price: string;
    staySafe: boolean;
    cultureClinic: boolean;
    others: boolean;
    noOfSeats: number;
    amount: number;
    selected: boolean
}

type SubCourseProp = {
    data: ISubCourse;
}
const SubscriptionCourse = ({ data }: SubCourseProp) => {
    const { selected } = data
    const [click, setClick] = useState<boolean>(selected)

    
   
    

    const dispatch = useAppDispatch()
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
                <div className={`${companyStyle.pickBtn} ${data.selected && companyStyle.btnPicked}`}>
                    <p>{data.staySafe && "Harrassment in the workplace"} {data.cultureClinic && "& Culture Clinic"}</p>
                    <button onClick={() => {
                        // setClick(!click)
                        dispatch(addCourseToSelectList({ ...data, selected:!data.selected}))

                    }} >
                        $<span>{data.price}</span>/ per user{data.selected && <span className={companyStyle.checkMark}></span>}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionCourse