import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styles from "./modal.module.css";
import "./modal.css";
import { AnimatePresence, motion } from "framer-motion";

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(styles);

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -300, y: -200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Checkout
      </motion.h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

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
            console.log("Hello");
            setIsOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              Back to home
            </button>
          </motion.div>
        </Modal>
      </AnimatePresence>
    </div>
  );
};

export default Checkout;
