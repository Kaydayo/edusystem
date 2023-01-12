import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import boardStyle from "../../../styles/Dashboard/Dashboard.module.css";
import { dashboardLinks } from "../../../constants/data";
import { capitalizeFirstLetter } from "../../../utils/helper";

const CompanyPageLinks = () => {
  const [curr, setCurr] = useState<string>("");
  return (
    <div>
      <div className={boardStyle.linkDashBoard}>
        {dashboardLinks.map((boardNavs, index) => (
          <NavLink
            to={`/dashboard/company/${boardNavs.path}`}
            onClick={() => setCurr(boardNavs.title)}
            key={index}
            // className={`${boardStyle.linkDashLink} ${curr === boardNavs ? boardStyle.hoverLink : ''}`}
            className={({ isActive }) =>
              isActive
                ? `${boardStyle.linkDashLink} ${boardStyle.hoverLink}`
                : `${boardStyle.linkDashLink}`
            }
          >
            {capitalizeFirstLetter(boardNavs.title)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CompanyPageLinks;
