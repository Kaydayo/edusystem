import React from 'react'
import stepperStyle from "../styles/CompanyOnboarding/Stepper.module.css"

type StepperProp = {
    step: number
}

const Stepper = ({ step }: StepperProp) => {
    
    return (
        <div className={stepperStyle.wrapperProgressBar}>
            <ul className={stepperStyle.progressBar}>
                <li className={ step > 0 ? stepperStyle.active : ''}>Admin Details</li>
                <li  className= {step > 1 ? stepperStyle.active : ''}>Company Details</li>
                <li className={step > 2 ? stepperStyle.active : ''}>Subscription</li>
            </ul>

        </div>
    )
}

export default Stepper