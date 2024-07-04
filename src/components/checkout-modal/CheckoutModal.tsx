import { AnimatePresence, motion } from "framer-motion";
import { Dispatch } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
// import styles from "./modal.module.css";
type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutModal = ({ modalIsOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();

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
  );
};

export default CheckoutModal;
