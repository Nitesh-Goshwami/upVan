import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { device } from "../../device";
import AccountMenu from "../menuComponet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Tooltip } from "@mui/material";
import AutoSuggestion from "../AutoSugeestioncomponent";
import { useState } from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = styled.nav`
  display: grid;
  padding-top: 1%;
  grid-template-columns: 1fr 1fr 1fr;
  width: 85%;
  margin: auto;

  font-family: "Quattrocento", serif;
  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #ffffff;
  }
`;

const LocationCont = styled.div`
  height: 100%;
  background-color: #ffffff;
  text-align: center;
  line-height: 3;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    background-color: #ffffff;
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 5%;
  font-weight: normal;

  &:hover {
    background-image: url(gardenn.jpeg);
    background-repeat: repeat;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Quattrocento", serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const SerachBoxandCartCont = styled.div`
  height: 100%;
  background-color: #ffffff;
  text-align: right;
  line-height: 3;
`;

const Logo = styled.img`
  width: 100%;
  margin-left: 5%;
  margin-top: 1%;
`;
/* const SearchIcon = styled(BiSearchAlt2)`
  color: rgb(38, 145, 244);
  font-size: 22px;
  margin-right: 5%;
  cursor: pointer;
`; */

export const NavBar = () => {
  const navigate = useNavigate();
  const cartqnty = useSelector((state) => state.cart.quantity);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const [searchbarstae, setsearchbarState] = useState(false);
  function Mangev() {
    return setsearchbarState(!searchbarstae);
  }
  return (
    <>
      <Nav>
        <Box width={{ xs: "30%", sm: "20%", md: "20%", lg: "20%", xl: "20%" }}>
          <Logo
            src="http://reverencevaluehomes.com/storage/uploads/Upvan-Logo_1574676671.png"
            onClick={() => {
              navigate("/");
            }}
          ></Logo>
        </Box>
        <LocationCont>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/About">About</StyledLink>
          <StyledLink to="/Prodcut">Prodcut</StyledLink>
          <StyledLink to="/Contact">Contact</StyledLink>
        </LocationCont>
        <SerachBoxandCartCont>
          <Box width={{ xs: "20ch", sm: "25ch", lg: "40ch" }}>
            <AutoSuggestion
              styles={searchbarstae ? "block" : "none"}
              event={Mangev}
            />
          </Box>

          {!searchbarstae ? (
            <Tooltip title="Search">
              <SearchIcon
                sx={{
                  mr: 1,
                  color: "rgb(189,189,189)",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  setsearchbarState(!searchbarstae);
                }}
              />
            </Tooltip>
          ) : (
            ""
          )}

          <Tooltip title="cart">
            <Badge badgeContent={cartqnty} sx={{ mr: 1 }} color="primary">
              <ShoppingCartIcon
                onClick={(e) => {
                  if (!isAuthenticated) loginWithRedirect();
                  navigate("/cart");
                }}
                sx={{
                  mr: 1,
                  mb: 1.9,
                  color: "rgb(189,189,189)",
                  cursor: "pointer",
                }}
              />
            </Badge>
          </Tooltip>

          <AccountMenu />
        </SerachBoxandCartCont>
      </Nav>
    </>
  );
};
