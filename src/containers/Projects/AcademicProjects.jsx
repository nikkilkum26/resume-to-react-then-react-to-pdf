import React from "react";
import { FcBriefcase } from "react-icons/fc";

const AcademicProjects = () => {
  return (
    <div className="academic_projects">
      <>
        <h2 className="title">
          <FcBriefcase fontSize={29} />
          Academic Projects
        </h2>
        <div className="line"></div>
        <section>
          <b>BE Final Year Project:</b>

          <div>Self-Power Generating Cell Phone Screen</div>

          <pre>Won Best Project Award in BE final year, 2017 </pre>
        </section>
        <section>
          <b>M.Tech Final Year Project:</b>

          <div>Shadow Detection in Image and Video Sequences</div>
        </section>
      </>
      <div className="certifications">
        <h2 className="title">
          <FcBriefcase fontSize={29} />
          Licenses & Certifications
        </h2>
        <div className="line"></div>
        <section>
          <b>
            BEC Vantage Certification (Level B1) - Cambridge University 2014
          </b>
        </section>
        <section>
          <b>REACT 2020 with Redux Examples - learnmall.in</b>
        </section>
        <section>
          <b>The Complete JavaScript Course for Web Development – Udemy</b>
        </section>
        <section>
          <b>
            Node.js, Express, MongoDB & More: The Complete Bootcamp 2022-Udemy
          </b>
        </section>
        <section>
          <b>Complete MongoDB Administration Guide-Udemy</b>
        </section>
      </div>
    </div>
  );
};

export default AcademicProjects;
