import Responsive from "../components/Carousel/Carousel.component";
import PromotionComponent from "../components/navbar/Promocomponent";
import PlantCollection from "../components/PlantCollection";

function Home() {
  return (
    <>
      <PromotionComponent />
      <PlantCollection></PlantCollection>
      <div style={{ width: "85%", margin: "auto" }}>
        <Responsive></Responsive>
      </div>
    </>
  );
}
export default Home;
