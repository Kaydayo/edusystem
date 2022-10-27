import React from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptStateBio from '../../Assets/Images/Report.svg'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css'

const Report = () => {
  return (
    <div className={boardStyle.centerEmptyState}>
          < EmptyState imag={emptStateBio} text="Looks like you have no report yet" />
    </div>
  )
}

export default Report

