import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a className="navbar-logo" href="">
          Audiophile
        </a>
        <nav className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Headphones</a>
          <a href="#">Speakers</a>
          <a href="#">Earphoones</a>
        </nav>
        <button className="navbar-cart-btn">Cart</button>
      </div>
    </header>
  );
};

export default Navbar;
