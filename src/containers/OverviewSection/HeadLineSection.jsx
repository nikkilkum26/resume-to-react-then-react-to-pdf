import { FcSurvey } from "react-icons/fc";
const HeadLineSection = () => {
  return (
    <div className="headline_container ">
      <div className="headline_section">
        <h2 className="flex">
          <FcSurvey />
          Overview
        </h2>
        <div className="line"></div>
        <section className="headline-content">
          Adaptable MERN Stack Web Developer with a passion for discovering
          cutting-edge web technologies. Expanding expertise in design for
          wireframes and prototypes.
        </section>
      </div>
    </div>
  );
};
export default HeadLineSection;
