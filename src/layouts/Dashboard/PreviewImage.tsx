import React, { useState } from 'react'
import dashboardStyle from '../../styles/Dashboard/Dashboard.module.css'

const PreviewImage = ({ file , defaultImage}: any) => {
    
    const [preview, setPreview] = useState<any>(defaultImage)
    // console.log(file, 'is not blob')
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        setPreview(reader.result)
    }
  return (
  
      <img src={preview} alt="preview" className={dashboardStyle.rmPP} />
   
  )
}

export default PreviewImage