import gsap from "gsap";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../device";

const Text = styled.p`
  background-image: url(gardenn.jpeg);
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Quattrocento", serif;
  -webkit-font-smoothing: antialiased;

  @media ${device.mobileS} {
    font-size: 60px;
  }
  @media ${device.mobileM} {
    font-size: 60px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 100px;
  }
`;
export function AnimatedText() {
  const TextanimationHook = useRef();
  const TextanimationHook1 = useRef();
  const TextanimationHook2 = useRef();

  useEffect(() => {
    gsap.from(TextanimationHook.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.2,
      y: -100,
    });
    gsap.from(TextanimationHook1.current, {
      opacity: 0,
      duration: 1.3,
      delay: 0.3,
      y: -100,
    });

    gsap.from(TextanimationHook2.current, {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      y: -100,
    });

    return () => {};
  }, []);
  return (
    <>
      <Text ref={TextanimationHook}>Welcome</Text>
      <Text ref={TextanimationHook1}>To</Text>
      <Text ref={TextanimationHook2}>उपवन</Text>
    </>
  );
}
