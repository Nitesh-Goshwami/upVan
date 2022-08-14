import styled from "styled-components";
import { device } from "../../device";
import ContactIcon from "./ContactIcon";
import { ContactForm } from "./ContactForm";
import "../../App.css";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  margin: auto;


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

const IconCont = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 14%;
  line-height: 6;
`;

const ContactFormBox = styled.div`
  width: 100%;
  font-family: "Quattrocento", serif;
`;

export default function ContactUs() {
  return (
    <>
      <div>
        <Container>
          <IconCont>
            <ContactIcon></ContactIcon>
          </IconCont>
          <ContactFormBox>
            <ContactForm />
          </ContactFormBox>
        </Container>
      </div>
    </>
  );
}
