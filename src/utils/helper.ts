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