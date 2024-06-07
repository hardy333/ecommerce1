import GearImg from "../../assets/shared/desktop/image-best-gear.jpg";
import "./audio-gear-section.css";

const AudioGearSection = () => {
  return (
    <section className="gear-section">
      <div className="container">
        {/* Left */}
        <div className="gear-content">
          <h2>Bringing you the best audio gear</h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        {/* Right */}
        <div className="gear-img-container">
          <img src={GearImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AudioGearSection;
