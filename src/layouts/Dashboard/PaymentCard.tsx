import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helper';
import cardStyle from '../../styles/Dashboard/PaymentCard.module.css'

type PaymentCardProp = {
    head: string;
    subhead: string;
    total?: string;
    availableSlot?: string | number;
    totalSlot?: string | number;
}
const PaymentCard = ({head, subhead,total, availableSlot,totalSlot}:PaymentCardProp) => {
  return (
      <div className={cardStyle.main}>
          <div className={cardStyle.head}>
              <h4>{head}</h4>
              <p>For {capitalizeFirstLetter(subhead)}</p>
          </div>

          <div className={cardStyle.amount}>
              <p>Total</p>
              <h4>${total}</h4>
          </div>

          <div className={cardStyle.slotUsage}>
              <div className={cardStyle.slotLabel}>
                  <p>{availableSlot} of {totalSlot} used</p>
                  <div>
                      <div style={{
                          "backgroundColor": "#23DD57",
                          "height": "100%",
                          "width": `${availableSlot === 0 ? 1 : (Number(availableSlot) *100/Number(totalSlot))}%`
                      }}>

                      </div>
                  </div>
              </div>
              <div>
                  <p>View Invoice</p>
              </div>
          </div>
    </div>
  )
}

export default PaymentCard