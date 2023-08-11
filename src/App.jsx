import React from "react";
import {
  OverviewSection,
  Banner,
  Summary,
  Experience,
  Projects,
} from "./containers";
import { Container } from "./components";
const App = () => {
  return (
    <Container>
      <OverviewSection />
      <Banner />
      <Summary />
      <Experience />
      <Projects />
    </Container>
  );
};

export default App;
