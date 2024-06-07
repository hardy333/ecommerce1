import AudioGearSection from "../components/audio-gear-section/AudioGearSection";
import Hero from "../components/hero/Hero";
import ProductsSection from "../components/products-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import Input from "../components/ui/input/Input";

// import Img1 from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <AudioGearSection />

      <Input type="radio" placeholder="Insert your name" isError={false} />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
