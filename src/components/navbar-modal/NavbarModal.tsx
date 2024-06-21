import Modal from "react-modal";

const NavbarModal = () => {
  return (
    <Modal
      className={`checkout-modal modal1 `}
      // className="checkout-modal"
      isOpen={modalIsOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
    >
      <div>I am a modal</div>
    </Modal>
  );
};

export default NavbarModal;
