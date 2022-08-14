import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  filterProduct,
  sortProduct,
} from "../../features/product/productSlice";

export default function FiltterMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Filtter
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={(e) => {
            dispatch(filterProduct("indoor"));
            handleClose();
          }}
        >
          Indoor
        </MenuItem>
        <Divider></Divider>
        <MenuItem
          onClick={(e) => {
            dispatch(filterProduct("outdoor"));
            handleClose();
          }}
        >
          Outdoor
        </MenuItem>
        <Divider></Divider>
        <MenuItem
          onClick={(e) => {
            dispatch(sortProduct(""));
            dispatch(filterProduct(""));
            handleClose();
          }}
        >
          Reset
        </MenuItem>
      </Menu>
    </div>
  );
}
