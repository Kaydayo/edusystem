import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../../styles/Dashboard/DashboardPageLayout.module.css";
import onCultureLogo from "../../Assets/Images/oncultureLogo.svg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import InviteEmployee from "./InviteEmployee";
import TeamModal from "../../components/TeamModal";
import Modal from "../../components/ Modal";
import { MdOutlineDashboard, MdSplitscreen } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { RiBuilding2Line, RiGroupLine, RiGroup2Line } from "react-icons/ri";

// interface nav {
//   label: string;
//   path: string;
// }

const sideBar_navLinks = [
  { icon: MdOutlineDashboard, label: "Overview", path: "overview" },
  { icon: FiBook, label: "Learning", path: "learning" },
  { icon: MdSplitscreen, label: "Templates", path: "templates" },
  // {
  //   label: "Report",
  //   path: "report",
  // },
  { icon: RiBuilding2Line, label: "Company", path: "company/profile/bio" },
];

const DashboardLayout = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showTeamModal, setShowTeamModal] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={onCultureLogo} alt="onCulture Logo" />
        </div>
        <div className={styles.linksContainer}>
          <ul>
            {sideBar_navLinks.map((navLink, i) => {
              const currentStyle =
                currentView === i + 1 ? `${styles.current}` : "";
              return (
                <NavLink
                  to={`/dashboard/${navLink.path}`}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.labelNormal} ${styles.labelActive} ${currentStyle} `
                      : `${styles.labelNormal} ${currentStyle}`
                  }
                  onClick={() => setCurrentView(i + 1)}
                >
                  <navLink.icon fontSize={25} />
                  {navLink.label}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <ul className={styles.midNav}>
          <li className={styles.labelNormal} onClick={() => setShowModal(true)}>
            <RiGroupLine fontSize={25} />
            Invite Employees
          </li>
          <li
            className={styles.labelNormal}
            onClick={() => setShowTeamModal(true)}
          >
            <RiGroup2Line fontSize={25} />
            Create Team
          </li>
        </ul>

        <div
          className={styles.logout}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <RiLogoutBoxRLine />
          <p>Log out</p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <div>
        <Modal
          show={showModal}
          setShowModal={setShowModal}
          children={<InviteEmployee />}
        />
      </div>
      <div>
        <TeamModal show={showTeamModal} setShowTeamModal={setShowTeamModal} />
      </div>
    </div>
  );
};

export default DashboardLayout;
