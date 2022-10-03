import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio  from '../../Assets/Images/employee.svg'

const BoardEmployee = () => {
  return (
      <div>
      < EmptyState imag={emptStateBio} text={`Looks like you haven't added any employee. Click here to
          invite your employees and assign them course seats
          `} />
    </div>
  )
}

export default BoardEmployee

    