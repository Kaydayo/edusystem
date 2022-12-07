import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import boardStyle from "../../../../styles/Dashboard/Dashboard.module.css";
import editIcon from "../../../../Assets/Images/edit-icon.svg";
import { CgPen } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import Subscription from "../../../../layouts/CompanyForms/Subscription";
import avatar from "../../../../Assets/Images/companyAvatar.svg";
import CompanyPageLinks from "../../components/CompanyPageLinks";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/store";
import { calNoOfSlotTotal } from "../../../../utils/helper";

// type ProfileProp = {
//   userProfilePicture: any;
//   companyName: string | undefined;
//   adminFirstName: string | undefined;
//   userEmail: string | undefined;
//   userPhoneNumber: string | undefined;
//   userRole: string | undefined;
//   noOfCourses: number | undefined;
//   noOfSlots: number | undefined;
// };

const Profile = () => {
  // const [profileInfo, setProfileInfo] = useState<any>({companyName:"", profilePicture:"", adminName:"", email:"", phoneNumber:"", role:""})
  const { profileInfo, userToken } = useAppSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={boardStyle.profileBoard}>
        <div className={boardStyle.leftBoard}>
          <div className={boardStyle.ppBoard}>
            {profileInfo.user.profilePicture ? (
              <img
                src={profileInfo.user.profilePicture}
                alt="profile icon"
                className={boardStyle.rmPP}
              />
            ) : (
              <img
                src={avatar}
                alt="profile icon"
                className={boardStyle.rmPP}
              />
            )}
            <span>
              <img src={editIcon} alt="onculture-edit-icon" />
            </span>
          </div>
          <div className={boardStyle.profileInfo}>
            <div className={boardStyle.profileInfoHead}>
              <h2>
                {profileInfo.company[0].companyName
                  ? profileInfo.company[0].companyName
                  : " "}
              </h2>
              <p>Lagos, Nigeria</p>
            </div>
            <div className={boardStyle.otherInfo}>
              <div>
                <p>Admin:</p>
                <p>Email:</p>
                <p>Phone:</p>
                <p>Role:</p>
              </div>
              <div className={boardStyle.valInfo}>
                <p>
                  {profileInfo.user.firstName ? profileInfo.user.firstName : ""}
                </p>
                <p>{profileInfo.user.email ? profileInfo.user.email : ""}</p>
                <p>
                  {profileInfo.user.phoneNumber
                    ? profileInfo.user.phoneNumber
                    : ""}
                </p>
                <p>{profileInfo.user.role ? profileInfo.user.role : "Admin"}</p>
              </div>
            </div>
          </div>
        </div>
        {/* break here */}
        <div className={boardStyle.rightBoard}>
          <div>
            <Link to="/dashboard/company/editProfile">
              <button className={boardStyle.editInfo}>
                <CgPen />
                <span>Edit</span>
              </button>
            </Link>
          </div>
          <div className={boardStyle.subscriptions}>
            <h4>Subscription</h4>
            <div className={boardStyle.slot}>
              <div className={boardStyle.slotSub}>
                <h5>Courses</h5>
                <p>{profileInfo.company[0].courses.length}</p>
              </div>

              <div className={boardStyle.slotSub}>
                <h5>Total Slot Purchased</h5>
                <p>{calNoOfSlotTotal(profileInfo.company[0].courses)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompanyPageLinks />

      <div className={boardStyle.mdashboard}>
        <Outlet />
      </div>
    </>
  );
};

export default Profile;
