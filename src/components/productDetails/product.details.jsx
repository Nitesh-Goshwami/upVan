import { Button, Rating, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../device";
import { data } from "../../fake.product.db";
import { addToCart, postitem } from "../../features/cart/cartSlice";
import { Banner } from "../Prodcutpagecomponents/Productpage.comoponent";
import { useAuth0 } from "@auth0/auth0-react";
import { CartAlert } from "../../features/cart/cartAlert";
import { addtowhishlist } from "../../features/wishlist/wishlistSlice";

const Cont = styled.div`
  width: 85%;
  margin: auto;
  margin-bottom: 4%;
`;
const ColorText = styled.span`
  color: green;
`;

const TextureCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetailsCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2%;
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

export function ProductDetails() {
  const [product, setProduct] = useState({});
  const [User, setuser] = useState("");
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const params = useParams(),
    productid = params.id,
    imgref = useRef();

  useEffect(() => {
    const whichProduct = data.filter((el) => el.id === +productid);
    setProduct(whichProduct[0]);
    if (user) setuser(user.email);
  }, [productid, user]);

  return (
    <>
      {product.id ? (
        <Cont>
          <br></br>
          <br></br>
          <ProductDetailsCont>
            <Banner ref={imgref} src={product.image}></Banner>
            <TextureCont>
              <Typography variant="h4">{product.title}</Typography>
              <Rating
                readOnly
                name="half-rating"
                defaultValue={product.rating.rate}
              ></Rating>
              <br></br>
              <Typography variant="h6">
                <ColorText>₹</ColorText> {product.price}
              </Typography>
              <br></br>
              <Typography variant="body1">{product.description}</Typography>
              <br></br>
              <Typography variant="h9">
                <ColorText>Catagory:</ColorText> {product.category}
              </Typography>
              <br></br>
              <Stack direction={"row"} spacing={2}>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={(e) => {
                    if (!isAuthenticated) return loginWithRedirect();
                    dispatch(addToCart(product));
                    dispatch(postitem({ item: product, user: User }));
                  }}
                >
                  Add To Cart
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    if (!isAuthenticated) return loginWithRedirect();
                    dispatch(addtowhishlist(product));
                  }}
                >
                  Add To wishlist
                </Button>
              </Stack>
            </TextureCont>
          </ProductDetailsCont>
          <CartAlert></CartAlert>
        </Cont>
      ) : (
        <Skeleton></Skeleton>
      )}
      <br></br>
    </>
  );
}
