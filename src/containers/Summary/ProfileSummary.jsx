import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { MySection } from "../../components";
const ProfileSummary = () => {
  return (
    <div className="profile__summary__container">
      <h2 className="title">
        <FcBusinessman fontSize={29} />
        <span>Profile Summary</span>
      </h2>
      <div className="line"></div>
      <article>
        <MySection
          points={
            "Competent M.Tech. in Computer Science Engg. with 3 years of MERN Full Stack Development experience."
          }
        />
        <MySection
          points={
            "Managed full SDLC: requirement analysis, development, coding, design, enhancements, customization"
          }
        />
        <MySection
          points={
            "Successfully completed diverse projects with up-to-date tools & technologies expertise."
          }
        />
        <MySection
          points={
            "Skilled in full-stack app development, including deployment, using diverse JavaScript tech for web apps."
          }
        />
        <MySection
          points={
            "Adaptable in fast-paced business settings, with a practical problem-solving approach for complex app issues."
          }
        />
        <MySection
          points={
            "Strong analytical, technical, communication, problem-solving, and leadership skills."
          }
        />
      </article>
    </div>
  );
};

export default ProfileSummary;
