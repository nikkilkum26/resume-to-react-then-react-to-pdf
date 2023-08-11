import React from "react";
import { FcBriefcase } from "react-icons/fc";
import { MySection } from "../../components";
const WorkExperience = () => {
  return (
    <div className="work__exp__container">
      <h2 className="title">
        <FcBriefcase fontSize={29} />
        Work Experience
      </h2>
      <div className="line"></div>
      <section>
        <div>
          Full Stack Developer at INTAIN- (IN-D-Power of AI), Chennai (Nov 2020
          - Nov 2021)
        </div>
        <MySection
          points={
            "Creating a prominent web app for the Operations Team, covering structure, compensation, performance feedback using front-end for information management."
          }
        />
        <MySection
          points={
            "Analyzing process needs and delivering use cases for business, functional, and technical requirements."
          }
        />
        <MySection
          points={
            "Solving integration and interface problems across diverse applications."
          }
        />
        <MySection
          points={
            "Engaging in Scrum meetings with teams to review project progress."
          }
        />
        <MySection
          points={
            "Adhering to Agile project methods for efficient delivery of top-quality code within tight schedules and budgets."
          }
        />
        <MySection
          points={
            "Tailoring development plans, code, and design to ensure client satisfaction and on-time project delivery within SLAs."
          }
        />
        <MySection
          points={"Ensuring	entire	stack	is	designed	and	built	for	speed	and	scalability"}
        />
      </section>
      <section>
        <div>
          Full Stack Developer at Codewave Technologies, Bangalore (Nov 2021 -
          Till Now)
        </div>
        <MySection
          points={
            "Engaging in both frontend and backend technologies to create highly scalable web apps, optimizing for peak performance."
          }
        />
        <MySection
          points={
            "Handling data modeling and schema updates for a rapidly scaling web app catering to diverse use cases."
          }
        />
        <MySection points={"Enhancing app performance and reliability."} />
        <MySection
          points={
            "Contributing to code design and reviewing for junior developers."
          }
        />
      </section>
    </div>
  );
};

export default WorkExperience;
