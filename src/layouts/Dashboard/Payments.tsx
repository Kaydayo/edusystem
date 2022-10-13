import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio from '../../Assets/Images/Payment.svg'
const Payments = () => {
  return (
      <div>
          < EmptyState imag={emptStateBio} text="Click here to Subscribe" />
    </div>
  )
}

export default Payments