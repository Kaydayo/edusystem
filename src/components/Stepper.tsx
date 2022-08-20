import React from 'react'
import { ProgressBar } from 'react-step-progress'
import stepperStyle from "../styles/CompanyOnboarding/Stepper.module.css"

const Stepper = () => {
    return (
        <div className={stepperStyle.wrapperProgressBar}>
            <ul className={stepperStyle.progressBar}>
                <li className={stepperStyle.active}>Admin Details</li>
                <li  className={stepperStyle.active}>Company Details</li>
                <li>Subscription</li>
            </ul>

        </div>
    )
}

export default Stepper