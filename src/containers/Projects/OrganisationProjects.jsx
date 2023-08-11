import React from "react";
import { FcBriefcase, FcCalendar } from "react-icons/fc";
import { MySection } from "../../components";
const OrganisationProjects = () => {
  return (
    <div className="org_proj">
      <h2 className="title">
        <FcBriefcase fontSize={29} />
        Work Experience
      </h2>
      <div className="line"></div>
      <section>
        <div>Payables by IN-D (Intain): (Feb-2020 to Nov2021)</div>
        <MySection
          points={
            "Created Payables Project's frontend UI using ReactJs, Context-API, Html5, CSS, JavaScript, and MaterialUi. Payables is a dynamic invoice capture and validation system with features like intuitive drag-and-play UI, semantic capabilities, cloud deployment, versatile data export, and invoice fraud checks."
          }
        />
      </section>
      <section>
        <div>Income Analysis by IN-D (Intain): (Dec-2020 to Nov2021) </div>
        <MySection
          points={
            "Built Income Analysis frontend UI with ReactJs, Redux, Thunk, Html5, CSS, JavaScript, and MaterialUi. Managed scanned and e-statements, enabled auto-reconciliation of bank statements without templates for various banks, and included features like intuitive UI for validation and reconciliation, fraud detection, image quality checks, and versatile data export."
          }
        />
      </section>
      <section>
        <div>WMBL(Intain): (Nov-2020 to Dec 2020) </div>
        <MySection
          points={
            "Designed the frontend UI for the WMBL project using ReactJs, Redux, Thunk, Html5, CSS, JavaScript, and Bootstrap, focusing on a CMS-based portal for banking application."
          }
        />
      </section>
      <section>
        <div>WORLD GRAD WEBSITE(Codewave): (Nov-2021 to Jan-2021) </div>
        <MySection
          points={
            "Designed dynamic screens utilizing CSS3 (grid system, flexbox), MaterialUi, JavaScript, and NextJS. Developed a learning website enabling candidates to select courses and explore opportunities for studying abroad."
          }
        />
      </section>
      <section>
        <div>Alessa-crm(Codewave): (Nov-2021 to till now) </div>
        <MySection
          points={
            "Creating frontend UI with ReactJs, Redux, Thunk, Html5, CSS, TypeScript, Bootstrap, and Ant Design for a CRM-based portal. This portal handles multilevel users, transactions, services, orders, and offers. Additionally, providing support for a Nodejs application."
          }
        />
      </section>
      <section>
        <div>Alessa-crm(Codewave)-v2: (Feb-2022 to till now) </div>
        <MySection
          points={
            "Creating frontend UI with Next.js, ReactJs, Redux, Thunk, Html5, CSS, JavaScript, Bootstrap, and Ant Design for a CRM portal managing users, transactions, services, orders, and offers. Implemented dynamic user-level access control. Also, contributed to the Nodejs backend, developing a dynamic role creation API for all users."
          }
        />
      </section>
      <section>
        <h2 className="title">
          <FcCalendar fontSize={29} />
          Personal Information
        </h2>
        <div>Date of Birth : 26/06/1996 </div>
      </section>
    </div>
  );
};

export default OrganisationProjects;
