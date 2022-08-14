import styled from "styled-components";
import { device } from "../device";

const StyledP = styled.p`
  margin-top: 5%;
  

  @media ${device.mobileS} {
    margin-top: 5%;
    
  }
  @media ${device.mobileM} {
    margin-top: 5%;
  }
  @media ${device.mobileL} {
    margin-top: 5%;
  }
  @media ${device.tablet} {
    margin-top: 5%;
  }
`;

const Description = (props) => {
  const { text } = props;
  return (
    <>
      <StyledP> {text}</StyledP>
    </>
  );
};
export default Description;
