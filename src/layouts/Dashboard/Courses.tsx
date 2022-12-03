import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptstateBio from '../../Assets/Images/Course.svg'

type CoursesProp = {
  courses?: [object]
}
const Courses = ({courses}:CoursesProp) => {
  return (
      <div>
          <EmptyState imag={emptstateBio} text="Looks like you have not picked a course yet." />
    </div>
  )
}

export default Courses
