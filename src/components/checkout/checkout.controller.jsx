import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

const Image = styled.img`
  width: 50%;
`;
export function CheckOut({ totalAmount, quantity }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: "2%",
          justifyContent: "felx-start",
        }}
      >
        <Stack direction={"column"} spacing={1}>
          <Image src="https://reepay.com/wp-content/uploads/2019/07/logo-cards-svg.svg"></Image>
          <Typography sx={{ ml: "1%" }} variant="h6">
            Qnty : {quantity}
          </Typography>
          <Typography variant="body2">Total : {totalAmount}</Typography>
        </Stack>
      </Box>
    </>
  );
}
