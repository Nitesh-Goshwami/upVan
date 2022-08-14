import { Typography } from "@material-ui/core";
import { Button, Divider, Rating, Stack } from "@mui/material";

import styled from "styled-components";
import { device } from "../../device";
import { Banner } from "../Prodcutpagecomponents/Productpage.comoponent";
import { QntyCounter } from "./qnty.count";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
/* gsap.from(imgref.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.9,
    });
 */
const Cont = styled.div`
  /* display: flex;
  flex-direction: row;
  gap: 3%;
  justify-content: space-around; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4%;
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
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImgCont = styled.div`
  width: 100%;
`;
const ColorText = styled.span`
  color: green;
`;
export function CartCard({ product, idx }) {
  const dispatch = useDispatch();

  function removefromCart({ qnty, id, price }) {
    console.log(qnty, id, price);
    return dispatch(removeFromCart({ qnty, id, price }));
  }
  const {
      title,
      image,
      description,
      qnty,
      id,
      price,
      rating: { rate },
    } = product,
    imgeRef = useRef(),
    headingref = useRef();

  useEffect(() => {
    gsap.from(imgeRef.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.9,
    });

    gsap.from(headingref.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
    });
  }, []);

  return (
    <>
      <br></br>
      <Cont ref={headingref}>
        <ImgCont>
          <Banner ref={imgeRef} src={image}></Banner>
        </ImgCont>
        <Stack direction={"column"} sx={{ wordBreak: "break-all" }} spacing={2}>
          <Typography variant="h6">{title}</Typography>
          <Rating readOnly name="half-rating" defaultValue={rate}></Rating>
          <Typography>
            <ColorText>₹</ColorText> {price}
          </Typography>
          <QntyCounter
            price={{ price }}
            id={{ id }}
            qnty={{ qnty }}
          ></QntyCounter>
          <Typography>
            {description.split(" ").splice(0, 15).join("") + ".."}
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Button
              size="small"
              variant="contained"
              color="success"
              sx={{ alignSelf: "flex-start" }}
            >
              Buy Now
            </Button>
            <Button
              onClick={(e) => {
                return removefromCart({ qnty, id, price });
              }}
              size="small"
              variant="outlined"
              color="error"
              sx={{ alignSelf: "flex-start" }}
            >
              Remove
            </Button>
          </Stack>
        </Stack>
      </Cont>
      <br></br>
      <br></br>

      <Divider sx={{ mt: "1%" }}></Divider>
    </>
  );
}
