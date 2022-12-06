import React, { useEffect, useState } from 'react'
import EmptyState from './EmptyStates/EmptyState'
import emptstateBio from '../../Assets/Images/bio.svg'
import { RootState, useAppSelector } from '../../redux/store'
import boardBioStyle from '../../styles/Dashboard/Dashboard.module.css'

export type BioProp = {
  mission?: string|undefined,
  vision?: string|undefined,
  values?: string|undefined
}

const Bio = () => {
  const [hasBio, setHasBio] = useState<boolean>(false)

  const { profileInfo, userToken } = useAppSelector((state: RootState) => state.user)
  const {mission, vision, values, aboutCompany} = profileInfo.company[0]

  if (!mission && !vision && !values.length) {
    return (
      <div className={boardBioStyle.centerEmptyState}>
        <EmptyState imag={emptstateBio} text="Looks like you have not completed your profile yet Click <a href='/editProfile' classname='markLink'>here</a> to get it completed." />
      </div>
    )
  } else {
    return (
      <div className={boardBioStyle.bioMain}>
        <div>
          <h4>About Your Company </h4>
          <p>{aboutCompany ? aboutCompany : ""}</p>
        </div>
        <div>
          <h4>Mission </h4>
          <p>{mission?mission:""}</p>
        </div>
        <div>
          <h4>Vision</h4>
          <p>{vision?vision:""}</p>
       </div>
        <div>
          <h4>Value</h4>
          {values.map((value: string) => {
            return (<p>{value ? value : ""}</p>)
          })}
         
       </div>
      </div>
    )
  }
  
  
}

export default Bio