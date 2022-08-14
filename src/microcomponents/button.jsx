import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 5%;
  border: 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgb(38, 145, 244);
  padding: 2%;
  border-radius: 2px;
  color: white;
  cursor: pointer;
`;
const UpvanButton = (props) => {
  const { text } = props;

  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  );
};
export default UpvanButton;
