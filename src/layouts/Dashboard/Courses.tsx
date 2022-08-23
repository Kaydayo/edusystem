import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptstateBio from '../../Assets/Images/Course.svg'

const Courses = () => {
  return (
      <div>
          <EmptyState imag={emptstateBio} text="Looks like you have not completed your profile yet Click here to get it completed." />
    </div>
  )
}

export default Courses
