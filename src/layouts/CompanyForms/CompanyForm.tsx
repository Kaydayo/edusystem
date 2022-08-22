import React from 'react'
import FieldType from '../../components/FieldType'
import Select from '../../components/Select'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import { employeeCount } from '../../constants/data'
import { CompanyFormEnum } from '../../types/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { handleFormInput } from '../../redux/companyonboard'

const CompanyForm = () => {
    const dispatch = useDispatch()
    const errors = useSelector((state: RootState) => state.companyonboard.errors)
    const form = useSelector((state: RootState) => state.companyonboard)
  return (
      <div className={companyStyle.admin}>
          <FieldType type='text' name='Company name*' formType={CompanyFormEnum.COMPANYNAME} />
          <Select data={employeeCount} tittle="Employee Count" name='employeeCount' placeHolder='Please Select' />
          <div className='fieldInput'>
              <label htmlFor="mission">Mission</label>
              <textarea name="mission" id="mission" rows={10} placeholder='Mission' value={form.info.mission} onChange={(e) => {
                  dispatch(handleFormInput({key: CompanyFormEnum.MISSION, value: e.target.value}))
              }}></textarea>
          </div>
          <div className='fieldInput'>
              <label htmlFor="vision">Vision</label>
              <textarea name="vision" id="vision" rows={10} placeholder='Vision' value={form.info.vision}
                onChange={(e)=>dispatch(handleFormInput({key:CompanyFormEnum.VISION, value:e.target.value}))}
              ></textarea>
          </div>
          <div className='fieldInput'>
              <label htmlFor="values">Values</label>
              <textarea name="values" id="values" rows={10} placeholder='Values'></textarea>
          </div>
    </div>
  )
}

export default CompanyForm