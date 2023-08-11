import React from "react";
import { FcOk } from "react-icons/fc";
const MySection = ({ points }) => (
  <section>
    <FcOk fontSize={29} />
    <span>{points}</span>
  </section>
);

export default MySection;
