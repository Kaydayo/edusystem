import React from 'react'
import FieldType from '../../components/FieldType'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'

const AdminForm = () => {
  return (
      <div className={companyStyle.admin}>
          <FieldType type='text' name='Firstname*' placeHolder='Firstname'/>
          <FieldType type='text' name='Surname*' placeHolder='Surname' />
          <FieldType type='text' name='Email Address*' placeHolder='Email Address'/>
          <FieldType type='text' name='Phone Number' placeHolder='Phone Number' />
    </div>
  )
}

export default AdminForm