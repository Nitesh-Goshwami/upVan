import styled from "styled-components";

const StyledH1 = styled.p`
  color: black;
  font-size: xx-large;
  font-weight: bolder;
  background-image: url(gardenn.jpeg);
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Quattrocento", serif;
  -webkit-font-smoothing: antialiased;
`;

const H1 = (props) => {
  const { text } = props;
  return (
    <>
      <StyledH1>{text}</StyledH1>
    </>
  );
};
export default H1;
