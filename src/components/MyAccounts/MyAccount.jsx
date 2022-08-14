import { useState } from "react"
import ControlledAccordions from "./AccountContent"
import { MyIamge } from "./MyImage"
import MediaCard from "./UserCard"
import { UserForm } from "./UserDetails"
import styled from "styled-components";
import { device } from "../../device";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top:20px;
  width: 85%;
  margin: auto;

  font-family: "Quattrocento", serif;
  @media ${device.mobileS} {
    grid-template-columns: 1fr ;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    background-color: #ffffff;
  }
`;



const MyAccount = () => {
    const [info, setInfo] = useState(false);
    // const [user, setUser] = useState(false);
    const handleClick = () => {
        if (!info) {
            setInfo(true)
        }
    }
    const handleUser = () => {
        setInfo(false)
    }
    return <>
        <Div>
            {/* <div style={{ display: "flex", marginTop: "10px" }}> */}

                <div style={{ width: "70%", marginLeft: "8%" }}>
                    <MediaCard url="petp.png" handleUser={handleUser} /><br />
                    <ControlledAccordions handleClick={handleClick} />
                </div>

                <div style={{ width: "100%" }}>
                    {info ? <UserForm /> : <MyIamge />}
                    {/* <UserForm /> */}
                </div>
            {/* </div> */}
        </Div>



    </>
}

export { MyAccount }