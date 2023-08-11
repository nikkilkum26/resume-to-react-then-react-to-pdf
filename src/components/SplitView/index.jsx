import React from "react";
import LeftBar from "./LeftBar";
import MainContainer from "./MainContainer";
import "./splitView.scss";

const SplitView = ({ leftBarChild, mainContainerChild }) => {
  return (
    <div className="split__viewContainer">
      <LeftBar>{leftBarChild}</LeftBar>
      <MainContainer>{mainContainerChild}</MainContainer>
    </div>
  );
};

export default SplitView;
