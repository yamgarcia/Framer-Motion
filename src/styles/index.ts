import styled from "styled-components";
import { motion } from "framer-motion";
import pic from "../assets/perfil.jpg";

export const Main = styled.main`
  .first {
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7abb91;
      }

      .right-side {
        width: 50%;
        height: 100%;
        .right-image {
          background: #7abb91;
          width: 100%;
          height: 100%;
          .main-img {
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            background-image: url(${pic});
          }
        }
      }
    }

    .b {
      background: #582534;
      width: 100%;
      height: 100%;
    }

    .c {
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background: green;
  }
  .third {
    background: yellow;
  }
  .fourth {
    background: blue;
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
