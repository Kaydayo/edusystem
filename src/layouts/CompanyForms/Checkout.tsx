import React, { useEffect, useState } from 'react'
import Subscription from './Subscription'
import companyStyle from '../../styles/CompanyOnboarding/Company.module.css'
import { subScriptionCourse } from '../../constants/data'
import { RiDeleteBinLine } from 'react-icons/ri'
import Button from '../../components/Button'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { ISubCourse } from './SubscriptionCourse'
import { addAmountToSelect } from '../../redux/subscription'
import { calculateTotalSelect } from '../../utils/helper'

type CheckoutProp = {
  step: number;
  setStep:(val:number) => void
}

const Checkout = ({step, setStep}:CheckoutProp) => {
  const [courseSelect, setCourseSelect] = useState<ISubCourse[]>([])
  const [subTotal, setSubTotal]= useState<number>(0)
  const [totalCost, setTotalCost] = useState<number>(0)
  const [tax, setTax] = useState<number>(9)
  const { selections, subscriptions } = useAppSelector((state: RootState) => state.subscription)
  console.log(subscriptions,'lood check')
  const dispatch = useAppDispatch()

  useEffect(() => {
    
    setCourseSelect([...selections])

    const additions = calculateTotalSelect(selections)

    console.log(additions,"gbo gbo e je")

    setSubTotal(additions)
    setTotalCost(additions+tax)
   
  }, [selections])
  
  
  return (
    <div className={companyStyle.checkoutMain}>
      <div className={companyStyle.tableHead}>
        <h4>Course</h4>
        <h4>No Of Seats</h4>
        <h4>Price per Seats</h4>
        <h4>Remove</h4>
      </div>

      {courseSelect.filter((item, idx)=> item.selected === true).map((element, index) => {
        return (<div key={index} className={companyStyle.entryCourse}>
          <div className={companyStyle.course}>
            <p>For {element.subscriptionName}</p>
            <h3>{element.staySafe && "StaySafe"} {element.cultureClinic && "& Culture Clinic"}</h3>
          </div>

          <div>
            <input type="number" value={element.noOfSeats} className={companyStyle.countBox}  onChange={(e) => {
              const calAmount = Number(e.target.value) * Number(element.price)
              dispatch(addAmountToSelect({id:element.id, amount:calAmount, noOfSeat: Number(e.target.value)}))
            }} />
          </div>

          <div className={companyStyle.priceSub}>
            ${element.price}
          </div>

          <div className={companyStyle.delBtn}>
            <RiDeleteBinLine />
          </div>

        </div>)
      })}


      <div className={companyStyle.payCard}>


        <div>
          <p onClick={()=> setStep(step -1)}>&lt; Subscription Plan</p>
        </div>



        <div>
          {/* first block */}
          <div className={companyStyle.subTotal}>
            <div>
              <p>Subtotal:</p>
              <p>Tax:</p>
            </div>
          {/* second block */}
            <div>
              <p>${subTotal}</p>
              <p>${tax}</p>
            </div>
          </div>

          <hr />
          {/* third block */}
          <div className={companyStyle.subTotal}>
            <p>Total</p>
            <p className={companyStyle.selectPurple}>${totalCost}</p>
          </div>
          {/* button */}
          <div>
            <Button className={companyStyle.subTotalBtn}>
              Pay
            </Button>
          </div>

        </div>





      </div>


    </div>
  )
}

export default Checkout