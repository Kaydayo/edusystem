import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio from '../../Assets/Images/Payment.svg'
const Payments = () => {
  return (
      <div>
          < EmptyState imag={emptStateBio} text="Looks like you have not completed your profile yet Click here to get it completed." />
    </div>
  )
}

export default Payments