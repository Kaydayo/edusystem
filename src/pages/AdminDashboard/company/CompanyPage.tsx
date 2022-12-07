import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import Modal from "../../../components/ Modal";
// import TeamModal from "../../../components/TeamModal";
// import InviteEmployee from "../../../layouts/Dashboard/InviteEmployee";
import { getUserDetails } from "../../../redux/actions/usersAction";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/store";
import dashBoardStyle from "../../../styles/Dashboard/Dashboard.module.css";
import DashboardHeader from "../components/DashboardHeader";

const CompanyPage = () => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [showTeamModal, setShowTeamModal] = useState<boolean>(false);
  const { profileInfo, userToken } = useAppSelector(
    (state: RootState) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(profileInfo, "juju");
  useEffect(() => {
    if (userToken === undefined) {
      navigate("/");
    }
    if (profileInfo === null) {
      dispatch(getUserDetails());
    }
    if (profileInfo === null) {
      navigate("/login");
    }
    if (profileInfo.company === null) {
      navigate("/company-onboarding");
    }

    if (!profileInfo && userToken) {
      dispatch(getUserDetails());
    }
  }, [profileInfo, userToken]);

  return (
    <div className={dashBoardStyle.mainBoard}>
      <div className={dashBoardStyle.mainBoardContainer}>
        <DashboardHeader>Company</DashboardHeader>
        <Outlet />

        {/* <div>
          <Modal
            show={showModal}
            setShowModal={setShowModal}
            children={<InviteEmployee />}
          />
        </div>
        <div>
          <TeamModal show={showTeamModal} setShowTeamModal={setShowTeamModal} />
        </div> */}
      </div>
    </div>
  );
};

export default CompanyPage;
