import { Pagination, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Skull from "../../utils/skeliton";
import { Paginate } from "../Prodcutpagecomponents/Productpage.comoponent";
import { CartCard } from "./cart.card";
import styled from "styled-components";
import MediaControlCard from "../checkout/card";
const FLex = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export function CartPage() {
  const caritems = useSelector((state) => state.cart.cartItems);
  const { totalAmount, quantity } = useSelector((state) => state.cart);

  const [flag, setflag] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setflag(caritems.length > 0);
  }, [caritems.length]);

  return (
    <>
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Stack direction="column">
          {flag ? (
            Paginate(caritems, 3, page).map((el, idx) => {
              return <CartCard idx={idx} key={el.id} product={el}></CartCard>;
            })
          ) : (
            <Skull></Skull>
          )}
        </Stack>
        <br></br>

        <FLex>
          <Stack direction={{ xs: "column", md: "column" }}>
            <Pagination
              shape="rounded"
              variant="outlined"
              color="primary"
              count={((caritems.length / 3) | 0) + 1}
              onChange={(e, v) => {
                setPage(v);
              }}
            />
            <br></br>
            <MediaControlCard
              totalAmount={totalAmount.toFixed(2)}
              quantity={quantity}
            ></MediaControlCard>
            <br></br>
          </Stack>
        </FLex>
      </Box>
    </>
  );
}
