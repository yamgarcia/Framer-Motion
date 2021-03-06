import React from "react";
import { useSpring, config } from "react-spring";

import Brand from "../Logo";
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";

import { BurgerWrapper, FlexContainer, NavBar, NavLinks } from "./styles";

const Navbar = (props: { handleNavbar: any; navbarState: any }) => {
  const { handleNavbar, navbarState } = props;

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href='/'>link n1</a>
            <a href='/'>link n2</a>
            <a href='/'>link n3</a>
            <a href='/'>link n4</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
    </>
  );
};

export default Navbar;
