import gsap from "gsap";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../device";
import UpvanButton from "../../microcomponents/button";
import Description from "../../microcomponents/descriptivetext";
import H1 from "../../microcomponents/Hone";
import Rellax from "rellax";

const TextBox = styled.div`
  width: 100%;
  height: 450px;
  background-color: #ffffff;
`;
const ImgBox = styled.div`
  width: 100%;
  
`;

const H1Box = styled.div`
  margin-top: 100px;
  width: 60%;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const PromoBox = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  height: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
  font-family: "Quattrocento", serif;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    grid-gap: 0%;
    ${H1Box} {
      margin-top: 80px;
      width: 100%;
    }
  }
  @media ${device.mobileM} {
    grid-gap: 0%;
    ${H1Box} {
      margin-top: 80px;
      width: 100%;
    }
  }
  @media ${device.mobileL} {
    grid-gap: 0%;
    ${H1Box} {
      margin-top: 80px;
      width: 100%;
    }
  }
  @media ${device.tablet} {
    grid-gap: 3%;
    grid-template-columns: 1fr 1fr;
    ${H1Box} {
      margin-top: 100px;
      width: 70%;
    }
  }
`;
function PromotionComponent() {
  const TextanimationHook = useRef();
  const ImageanimationHook = useRef();
  const rellaxRef = useRef();
  useEffect(() => {
    gsap.from(TextanimationHook.current, {
      opacity: 0,
      duration: 1.1,
      y: -100,
      delay: 0.3,
    });
    gsap.from(ImageanimationHook.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.5,
    });
    new Rellax(rellaxRef.current, {
      speed: 5,
    });
    return () => {};
  }, []);
  return (
    <>
      <div ref={rellaxRef}>
        <PromoBox>
          <TextBox>
            <H1Box ref={TextanimationHook}>
              <H1 text="There are  passages of Lorem Ipsum available, but the majority have suffered" />
              <Description text="It is a long established fact that a reader will be distracted by the readable content of a  'Content here,">
                {" "}
              </Description>
            </H1Box>
            <UpvanButton text="Click here to buy now"></UpvanButton>
          </TextBox>

          <ImgBox ref={ImageanimationHook}>
            <StyledImg src="mosssai.png" />
          </ImgBox>
        </PromoBox>
      </div>
    </>
  );
}
export default PromotionComponent;
