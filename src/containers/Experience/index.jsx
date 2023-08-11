import React from "react";
import { SplitView } from "../../components";
import TechnicalSkills from "./TechnicalSkills";
import WorkExperience from "./WorkExperience";
import "./experience.scss";

const Experience = () => {
  //Technical Skills and WorkExperience section
  return (
    <SplitView
      leftBarChild={<TechnicalSkills />}
      mainContainerChild={<WorkExperience />}
    />
  );
};

export default Experience;
