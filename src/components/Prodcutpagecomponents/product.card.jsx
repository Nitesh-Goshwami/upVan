import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addtowhishlist } from "../../features/wishlist/wishlistSlice";
import gsap from "gsap";
import { addToCart, postitem } from "../../features/cart/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(prop) {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const [email, setemail] = React.useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuthenticated) {
      setemail(user.email);
    }
  }, [isAuthenticated, user]);

  const {
      productname,
      productPrice,
      productimg,
      productdescription,
      whole,
      catagory,
      rating,
    } = prop,
    dispatch = useDispatch(),
    wishlist = useSelector((state) => state.wishlist),
    cardRef = React.useRef();

  React.useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0.0,
      duration: 1.5,
      delay: 0.5,
    });
  }, []);

  function isTheir(id) {
    if (!wishlist.whishlist.length) return true;
    let tmp = [...wishlist.whishlist].filter((el) => el.id === id);
    return tmp.length === 0;
  }
  return (
    <Card
      sx={{ maxWidth: 345, mt: "2%", ml: "2%", cursor: "pointer" }}
      onClick={(e) => {
        if (e.target.nodeName !== "BUTTON") {
          navigate("/Product/" + whole.id);
        }
      }}
    >
      <CardMedia
        ref={cardRef}
        component="img"
        height="140"
        image={productimg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productname.trim().split(" ").splice(0, 1)}
        </Typography>
        <Typography variant="small" component="small">
          {catagory}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {productdescription.split("").slice(0, 25).join("") + "..."}
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontSize: "20px" }}
        >
          ₹ {productPrice}
        </Typography>
        <Rating readOnly name="half-rating" defaultValue={rating}></Rating>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={(e) => {
            if (!isAuthenticated) return loginWithRedirect();
            dispatch(addToCart(whole));
            dispatch(postitem({ item: whole, user: email }));
          }}
        >
          cart
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={(e) => {
            if (!isAuthenticated) return loginWithRedirect();
            if (isTheir(whole.id)) {
              dispatch(addtowhishlist(whole));
            }
          }}
        >
          watchlist
        </Button>
      </CardActions>
    </Card>
  );
}
