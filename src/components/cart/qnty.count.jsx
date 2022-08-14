import { Stack, Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import {
  addItemQuantity,
  subtractItemQuantity,
} from "../../features/cart/cartSlice";

export function QntyCounter({ qnty, id, price }) {
  const dispatch = useDispatch();

  function HanldeIncrement() {
    dispatch(addItemQuantity({ id: id.id, price }));
  }
  function Hanldedeccrement() {
    dispatch(subtractItemQuantity({ id: id.id }));
  }

  return (
    <>
      <Stack direction={"row"}>
        <ButtonGroup size="small" aria-label="small button group">
          <Button
            onClick={HanldeIncrement}
            size="small"
            variant="contained"
            color="success"
          >
            +
          </Button>
          <Button>{qnty.qnty}</Button>
          <Button
            onClick={Hanldedeccrement}
            size="small"
            variant="outlined"
            color="error"
          >
            -
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}
