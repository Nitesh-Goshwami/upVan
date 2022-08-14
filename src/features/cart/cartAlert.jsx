import { Alert, Snackbar } from "@mui/material";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCartAlert } from "./cartSlice";

export function CartAlert() {
  const alertState = useSelector((state) => state.cart.cartAlert);
  const dispatch = useDispatch();
  if (alertState) {
    setTimeout(() => {
      dispatch(resetCartAlert());
    }, 6000);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(resetCartAlert());
  };
  /* rgb(102,177,77) */
  return (
    <Snackbar open={alertState} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Item successfully added to your cart !
      </Alert>
    </Snackbar>
  );
}
