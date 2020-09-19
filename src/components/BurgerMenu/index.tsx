import React from "react";
import Wrapper from "./styles";

const Burgermenu = (props: { handleNavbar: any; navbarState: any }) => {
  const { handleNavbar, navbarState } = props;

  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default Burgermenu;
