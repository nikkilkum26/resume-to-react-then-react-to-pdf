import React from "react";
import { SplitView } from "../../components";
import "./overviewSection.scss";
import ProfilePicLeftSection from "./ProfilePicLeftSection";
import HeadLineSection from "./HeadLineSection";

const OverviewSection = () => {
  //Profile Pic and resume Headline Section
  return (
    <SplitView
      leftBarChild={<ProfilePicLeftSection />}
      mainContainerChild={<HeadLineSection />}
    />
  );
};

export default OverviewSection;
