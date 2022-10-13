import { number } from "yup";
import { ISubCourse } from "../layouts/CompanyForms/SubscriptionCourse";

export const  capitalizeFirstLetter = (str:string) => {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

export const calculateTotalSelect = (data: ISubCourse[]) => {
    console.log(data, 'data ihahin')
    return data.reduce((prev, curr)=> prev + curr.amount, 0)
    
}

export const getColorGrade = (value: number):string => {
    if (value <= 44) {
        return "#FC665D"
    } else if (value >= 45 && value < 50) {
        return "#F2994A"
    } else {
        return "#1FC54E"
    }
}

export const addZeroToSingle = (value: number): string => {
    const inc = value + 1
    return  inc.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}