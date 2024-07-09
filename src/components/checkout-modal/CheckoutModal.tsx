import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Button from "../ui/button/Button";
// import styles from "./modal.module.css";
import "./checkou-modal.css";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutModal = ({ modalIsOpen, setIsOpen }: Props) => {
  // const navigate = useNavigate();
  const cartState = useSelector((state: RootState) => state.cart.value);
  const [showAllItems, setShowAllitems] = useState(false);

  return (
    <AnimatePresence>
      <Modal
        // closeTimeoutMS={500}
        className={`checkout-modal`}
        // className="checkout-modal"
        isOpen={modalIsOpen}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <motion.div
          className="checkout-modal-containerr"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>You will receive an email confirmation shortly.</p>

          <section className="checkout-modal-content">
            {/* Left */}
            <div className="left">
              {cartState
                // .filter((item, index) => (showAllItems ? true : index === 0))
                .slice(0, showAllItems ? cartState.length : 1)
                .map((item) => {
                  return (
                    <div key={item.product.id} className="checkout-item">
                      <img
                        className="item-img"
                        src={"/" + item.product.image.mobile}
                        alt=""
                      />
                      <div className="item-info">
                        <p className="item-name">
                          {item.product.name.split(" ").slice(0, -1).join(" ")}
                        </p>
                        <p className="item-price">${item.product.price}</p>
                      </div>
                      <p className="item-amount">x{item.amount}</p>
                    </div>
                  );
                })}

              <div className="checkout-seperator"></div>
              <button
                onClick={() => setShowAllitems(!showAllItems)}
                className="checkout-show-all"
              >
                {showAllItems
                  ? "show less"
                  : ` and ${cartState.length - 1} other item(s)`}
              </button>
            </div>
            {/* Right */}
            <div className="right">
              <p>GRAND TOTAL</p>
              <h3>$ 5,555</h3>
            </div>
          </section>

          <Button variant="primary">BACK TO HOME</Button>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
};

export default CheckoutModal;
