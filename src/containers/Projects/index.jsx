import React from "react";
import "./projects.scss";
import { SplitView } from "../../components";
import AcademicProjects from "./AcademicProjects";
import OrganisationProjects from "./OrganisationProjects";
const Projects = () => {
  return (
    <SplitView
      leftBarChild={<AcademicProjects />}
      mainContainerChild={<OrganisationProjects />}
    />
  );
};

export default Projects;
