import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* left */}
        <div>
          <h2>Audiphile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi ea
            odit autem tempora labore, deleniti aliquid! Culpa facilis at atque!
            Esse, et porro ipsa quibusdam fugiat quis placeat nobis.
          </p>

          <p>Lorem ipsum dolor sit.</p>
        </div>
        {/* Right */}
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products/headphones">Headphones</Link>
            <Link to="/products/speakers">speakers</Link>
            <Link to="/products/earphones">earphones</Link>
          </nav>

          <ul>
            <li>F</li>
            <li>T</li>
            <li>I</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
