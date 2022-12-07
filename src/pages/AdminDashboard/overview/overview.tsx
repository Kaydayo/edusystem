import React, { useEffect, useState } from "react";
import styles from "../../../styles/Dashboard/Dashboard.module.css";
import DashboardHeader from "../components/DashboardHeader";

const Overview = () => {
  return (
    <div className={styles.mainBoard}>
      <div className={styles.mainBoardContainer}>
        <DashboardHeader>Overview</DashboardHeader>
      </div>
    </div>
  );
};

export default Overview;
