import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio from '../../Assets/Images/Report.svg'

const Report = () => {
  return (
      <div>
          < EmptyState imag={emptStateBio} text="Looks like you have no report yet" />
    </div>
  )
}

export default Report

