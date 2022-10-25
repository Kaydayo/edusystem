import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio from '../../Assets/Images/Payment.svg'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css'


const Payments = () => {
  return (
    <div className={boardStyle.centerEmptyState}>
      < EmptyState imag={emptStateBio} text="Click <a href='/' classname='markLink'>here</a> to Subscribe" />
    </div>
  )
}

export default Payments