import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio from '../../Assets/Images/Team.svg'

const Team = () => {
  return (
      <div>
          < EmptyState imag={emptStateBio} text="Click here to create teams for course collaboration" />
        </div>
  )
}

export default Team



