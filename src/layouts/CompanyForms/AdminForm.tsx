import React from 'react'
import FieldType from '../../components/FieldType'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import { CompanyFormEnum } from '../../types/interfaces'

const AdminForm = () => {
 
  return (
      <div className={companyStyle.admin}>
          <FieldType type='text' name='Firstname*' placeHolder='Firstname' formType={CompanyFormEnum.FIRSTNAME}/>
          <FieldType type='text' name='Surname*' placeHolder='Surname' formType={CompanyFormEnum.SURNAME}/>
          <FieldType type='text' name='Email Address*' placeHolder='Email Address' formType={CompanyFormEnum.EMAIL}/>
          <FieldType type='text' name='Phone Number' placeHolder='Phone Number' formType={CompanyFormEnum.PHONENUMBER}/>
    </div>
  )
}

export default AdminForm