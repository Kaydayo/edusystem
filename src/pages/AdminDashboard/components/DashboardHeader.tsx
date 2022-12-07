import React from "react";
import styles from "../../../styles/Dashboard/DashboardHeader.module.css";

const DashboardHeader = ({ children }: any) => {
  return <div className={styles.main}>{children}</div>;
};

export default DashboardHeader;
