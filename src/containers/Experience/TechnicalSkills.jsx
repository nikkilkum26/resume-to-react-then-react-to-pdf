import React from "react";
import { FcServices, FcBriefcase } from "react-icons/fc";
const TechnicalSkills = () => {
  return (
    <>
      <div className="tech__skills">
        <h2 className="title">
          <FcServices fontSize={29} />
          Technical Skills
        </h2>
        <div className="line"></div>
        <section>
          Next.js | React.js | Redux.js | Redux Thunk | Express.js | Node.js |
          MongoDB | JavaScript | HTML5 | Cascading Style Sheets (CSS) |
          Syntactically Awesome Style Sheets (SCSS) | Tailwind CSS | MUI | AntD
          | Bootstrap |
        </section>
        <div className="internship">
          <h2 className="title">
            <FcBriefcase fontSize={29} />
            Internship
          </h2>
          <div className="line"></div>
          <section>2019: Hitachi ABB Power Grids, Bangalore as Intern</section>
        </div>
      </div>
    </>
  );
};

export default TechnicalSkills;
