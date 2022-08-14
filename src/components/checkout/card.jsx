import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MediaControlCard({ totalAmount, quantity }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ width: "90%" }}>
            You Have {quantity} Products in your bag
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Need to Pay ₹ {totalAmount}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            onClick={(e) => {
              navigate("/checkout");
            }}
            size="small"
            variant="contained"
            color="success"
          >
            Checkout
          </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://reepay.com/wp-content/uploads/2019/07/logo-cards-svg.svg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
