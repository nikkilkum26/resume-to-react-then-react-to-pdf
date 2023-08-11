import React from "react";
import { FcReading } from "react-icons/fc";
const Education = () => {
  return (
    <div className="education__summary">
      <h2 className="title">
        <FcReading fontSize={29} />
        <span>Education</span>
      </h2>
      <div className="line"></div>
      <article>
        <section>
          <b> 2019: Master Of Tech. in Computer Science </b>
          <span>from Amrita Vishwa Vidyapeetham, Coimbatore</span>
        </section>
        <section>
          <b>
            {" "}
            2017: Bachelor Of Engg. in Electronics and Instrumentation
            Engineering{" "}
          </b>
          <span>from R.M.K. Engineering College, Chennai</span>
        </section>
        <section>
          <b>2013: HSC </b>
          <span>from RMK Matriculation Higher Secondary School, Chennai</span>
        </section>
        <section>
          <b>2011: SSC </b>
          <span>from RMK Matriculation Higher Secondary School, Chennai</span>
        </section>
      </article>
    </div>
  );
};

export default Education;
