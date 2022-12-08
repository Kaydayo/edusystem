import React from "react";
import EmptyState from "../../../../layouts/Dashboard/EmptyStates/EmptyState";
import emptStateBio from "../../../../Assets/Images/Payment.svg";
import boardStyle from "../../../../styles/Dashboard/Dashboard.module.css";
import { RootState, useAppSelector } from "../../../../redux/store";
import Button from "../../../../components/Button";
import SubscriptionsTable from "../../../../components/Table/SubscriptionsTable";
import PaymentCard from "../../../../layouts/Dashboard/PaymentCard";

const Payments = () => {
  const { profileInfo, userToken } = useAppSelector(
    (state: RootState) => state.user
  );
  const { courses } = profileInfo.company[0];

  if (!courses.length) {
    return (
      <div className={boardStyle.centerEmptyState}>
        <EmptyState
          imag={emptStateBio}
          text="Click <a href='/' classname='markLink'>here</a> to Subscribe"
        />
      </div>
    );
  } else {
    return (
      <div className={boardStyle.paymentBoard}>
        <div className={boardStyle.paymentActive}>
          <h4>Active Subscriptions</h4>
          <Button className={boardStyle.paymentButton}>Add to plan</Button>
        </div>
        <div>
          {courses.some((course: any) => course.status === "Active") ? (
            <div className={boardStyle.payCardList}>
              {" "}
              {courses.map((course: any, index: any) => {
                return (
                  <div key={index}>
                    <PaymentCard
                      head={course.title}
                      subhead={course.subscriptionName}
                      total={course.amount}
                      availableSlot={course.noOfSlotUsed}
                      totalSlot={course.noOfSeats}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={boardStyle.centerEmptyState}>
              <EmptyState
                imag={emptStateBio}
                text="<button className='smallButton'>subscribe</button>"
                head='<h5 className="mediumText">You do not have an active subscription</h5>'
              />
            </div>
          )}
        </div>

        <div className={boardStyle.paymentTable}>
          <SubscriptionsTable data={courses} rowsPerPage={6} />
        </div>
      </div>
    );
  }
};

export default Payments;
