import styled from "styled-components";
import { GiPlantsAndAnimals } from "react-icons/gi";
import ImgMediaCard from "../microcomponents/Card";
import { device } from "../device";

export const Heading = styled.p`
  font-family: "Quattrocento", serif;
  font-size: x-large;
  text-align: center;
  font-weight: bold;
  color: black;
  font-weight: bolder;
  background-image: url(gardenn.jpeg);
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
`;

const CollectionCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 85%;
  margin: auto;
  grid-gap: 1%;

  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PlantCollection = () => {
  return (
    <>
      <Heading>
        Plant Collections{" "}
        <span>
          <GiPlantsAndAnimals></GiPlantsAndAnimals>
        </span>
      </Heading>
      <br />
      <br></br>
      <CollectionCont>
        <ImgMediaCard
          uri="petp.png"
          heading="Indoor"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        />
        <ImgMediaCard
          uri="petfrnd.png"
          heading="Outdoor"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        />
        <ImgMediaCard
          uri="forof.jpg"
          heading="For Office"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        />
        <ImgMediaCard
          uri="petp.png"
          heading="Air Purify"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        />
        <ImgMediaCard
          uri="petfrnd.png"
          heading="For Pets"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        />
        <ImgMediaCard
          uri="forof.jpg"
          heading="Farming"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
        />
      </CollectionCont>
      <br></br>
      <br></br>
    </>
  );
};

export default PlantCollection;
