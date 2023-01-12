import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../../styles/Dashboard/Dashboard.module.css";

const Learning = () => {
  return (
    <div className={styles.mainBoard}>
      <div className={styles.mainBoardContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Learning;
