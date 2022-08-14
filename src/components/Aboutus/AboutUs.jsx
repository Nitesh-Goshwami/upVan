import gsap from "gsap";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../device";
import { Heading } from "../PlantCollection";
import { AnimatedText } from "./AnimatedText.component";
//about us
const Box = styled.div`
  width: 85%;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextCont = styled.div`
  height: 100%;
  width: 100%;
`;

const SLiderCont = styled.div`
  
`;

export function AboutUS() {
  const ImageanimationHook = useRef();

  useEffect(() => {
    gsap.from(ImageanimationHook.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.5,
      y: -100,
    });

    return () => { };
  }, []);
  return (
    <>
      <div>
        <Box>
          <TextCont>
            <br />
            <br />
            <br />
            <br />
            <AnimatedText></AnimatedText>
          </TextCont>

          <SLiderCont ref={ImageanimationHook}>
            <img src="bgg.jpeg" alt="" width="100%" />
          </SLiderCont>
        </Box>
        <br />
        <br />
        <Heading>About Us</Heading>
      </div>
    </>
  );
}
