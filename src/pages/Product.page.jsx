import styled from "styled-components";
import { ProductPageComponent } from "../components/Prodcutpagecomponents/Productpage.comoponent";

const Cont = styled.div`
  width: 85%;
  margin: auto;
`;

function ProductPage() {
  return (
    <>
      <Cont>
        <ProductPageComponent />
      </Cont>
    </>
  );
}
export default ProductPage;
