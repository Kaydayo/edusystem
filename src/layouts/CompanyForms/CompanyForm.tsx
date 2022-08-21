import React from 'react'
import FieldType from '../../components/FieldType'
import Select from '../../components/Select'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import { employeeCount } from '../../constants/data'

const CompanyForm = () => {
  return (
      <div className={companyStyle.admin}>
          <FieldType type='text' name='Company name*' />
          <Select data={employeeCount} tittle="Employee Count" name='employeeCount' placeHolder='Please Select' />
          <div className='fieldInput'>
              <label htmlFor="mission">Mission</label>
              <textarea name="mission" id="mission" rows={10} placeholder='Mission'></textarea>
          </div>
          <div className='fieldInput'>
              <label htmlFor="vision">Vision</label>
              <textarea name="vision" id="vision" rows={10} placeholder='Vision'></textarea>
          </div>
          <div className='fieldInput'>
              <label htmlFor="values">Values</label>
              <textarea name="values" id="values" rows={10} placeholder='Values'></textarea>
          </div>
    </div>
  )
}

export default CompanyForm