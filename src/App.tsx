/**
 * @notes
 * //* 1610vh => Viewport Height (vh) – A percentage of the full viewport height. 10vh will resolve to 10% of the current viewport height.
 *
 */
import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/global";
import { Main, Section, Sticky } from "./styles";
import FirstAndSecond from "./components/FirstAndSecond";
import Navbar from "./components/Navbar";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className='third' />
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className='fourth' />
        </Section>
        <GlobalStyles />
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      </Main>
    </>
  );
}

export default App;
