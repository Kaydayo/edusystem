import React from 'react'
import stepperStyle from "../styles/CompanyOnboarding/Stepper.module.css"

type StepperProp = {
    step: number;
    setStep: (step:number) => void;
}

const Stepper = ({ step, setStep }: StepperProp) => {
   
    
    return (
        <div className={stepperStyle.wrapperProgressBar}>
            <ul className={stepperStyle.progressBar}>
                <li onClick={()=>setStep(0)} className={ step >= 0 ? stepperStyle.active : ''}>Admin Details</li>
                <li onClick={() => setStep(1)} className= {step >= 1 ? stepperStyle.active : ''}>Company Details</li>
                <li onClick={() => setStep(2)}  className={step >= 2 ? stepperStyle.active : ''}>Subscription</li>
            </ul>

        </div>
    )
}

export default Stepper