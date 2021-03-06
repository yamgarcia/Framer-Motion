import { useViewportScroll, useTransform } from "framer-motion";
import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["0%", "-100%"]
  );

  return (
    <Container style={{ y: headerY }}>
      <ul>
        <li>home</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </Container>
  );
};

export default Header;
