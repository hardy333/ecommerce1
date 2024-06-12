import { useContext, useState } from "react";
import "./navbar.css";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { CartContext, cartContextType } from "../../context/CartContext";
import NumberInput from "../ui/number-input/NumberInput";
import { getProdCurrNumber } from "../../pages/Product";

const Navbar = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  const { cartState, updateCart } = useContext(CartContext) as cartContextType;

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          <a className="navbar-logo" href="">
            Audiophile
          </a>
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/products/headphones">Headphones</Link>
            <Link to="/products/speakers">Speakers</Link>
            <Link to="/products/earphones">Earphoones</Link>
          </nav>
          <button onClick={() => setIsOpen(true)} className="navbar-cart-btn">
            <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </button>
        </div>
      </header>

      <Modal
        className="cart-modal"
        isOpen={modalIsOpen}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="cart-container">
          {cartState.map((item) => {
            return (
              <>
                <img
                  width={50}
                  src={`/${item.product?.image.desktop}`}
                  alt="image"
                />
                <div>
                  <p>product category - {item.product?.category}</p>
                  <p>product name - {item.product?.name}</p>
                  {item.product && (
                    <NumberInput
                      maxQuantity={50}
                      number={getProdCurrNumber(cartState, item.product)}
                      setNumber={(num: number) => updateCart(num, item.product)}
                    />
                  )}
                </div>
              </>
            );
          })}
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/checkout");
          }}
        >
          Back to home
        </button>
      </Modal>
    </>
  );
};

export default Navbar;
