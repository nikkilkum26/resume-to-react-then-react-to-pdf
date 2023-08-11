import React from "react";
import Education from "./Education";
import ProfileSummary from "./ProfileSummary";
import { SplitView } from "../../components";
import "./summary.scss";

const Summary = () => {
  return (
    <SplitView
      leftBarChild={<Education />}
      mainContainerChild={<ProfileSummary />}
    />
  );
};

export default Summary;
