import React from 'react'
import Button from '../../components/Button'
import labelStyle from '../../styles/Home/Label.module.css'

const Label = () => {
  return (
      <div className={labelStyle.content}>
          <h1>
              So Your Culture Alignment is a click away
          </h1>
          <div className={labelStyle.labelBtns}>
              <Button className={labelStyle.btnWhite}>
                  Book a Demo
              </Button>
              <Button className={labelStyle.btnOutline}>
                  See our Pricing
              </Button>
          </div>
          
    </div>
  )
}

export default Label