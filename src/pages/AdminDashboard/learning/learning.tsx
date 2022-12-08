import React, { useEffect, useState } from "react";
import styles from "../../../styles/Dashboard/Dashboard.module.css";
import DashboardHeader from "../components/DashboardHeader";

const Learning = () => {
  return (
    <div className={styles.mainBoard}>
      <div className={styles.mainBoardContainer}>
        <DashboardHeader>Learning</DashboardHeader>
      </div>
    </div>
  );
};

export default Learning;
