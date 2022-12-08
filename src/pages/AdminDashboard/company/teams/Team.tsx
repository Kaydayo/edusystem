import React from "react";
import EmptyState from "../../../../layouts/Dashboard/EmptyStates/EmptyState";
import emptStateBio from "../../../../Assets/Images/Team.svg";
import boardStyle from "../../../../styles/Dashboard/Dashboard.module.css";
import { useOutletContext } from "react-router-dom";

const Team = () => {
  return (
    <div className={boardStyle.centerEmptyState}>
      <EmptyState
        imag={emptStateBio}
        text="Click <a href='/' classname='markLink'>here</a> to create teams for course collaboration"
      />
    </div>
  );
};

export default Team;
