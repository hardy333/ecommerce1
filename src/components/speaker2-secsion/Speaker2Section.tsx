import Button from "../ui/button/Button";
import "./speaker2-section.css";

const Speaker2Section = () => {
  return (
    <section className="speaker2-section">
      <div className="container speaker2-section-container">
        <div className="content">
          <h2>ZX7 SPEAKER</h2>
          <Button isLink={true} to="/products/headphones/6" type="dark">
            See product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speaker2Section;
