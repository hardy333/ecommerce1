import { Dispatch } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import NumberInput from "../ui/number-input/NumberInput";
import { getProdCurrNumber } from "../../pages/Product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { updateCart } from "../../teafures/cart/cartSlice";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CartComponentWithRedux = ({ modalIsOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();

  const cartState = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        className="cart-modal"
        isOpen={modalIsOpen}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="cart-container">
          {/* <h4>
            Cart ({cartState.reduce((sum, item) => sum + item.amount, 0)})
          </h4> */}
          <h4>Cart ({cartState.length})</h4>
          {/* {cartState.length === 0 ? null : (
            <button onClick={() => clearCart()}>Remove All</button>
          )} */}

          {cartState.map((item) => {
            return (
              <div
                key={item.product.id}
                style={{
                  border: "1px solid black",
                  marginBottom: 20,
                }}
              >
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
                      minAmount={0}
                      number={getProdCurrNumber(cartState, item.product)}
                      setNumber={(num: number) =>
                        dispatch(updateCart({ num, product: item.product }))
                      }
                    />
                  )}
                </div>
              </div>
            );
          })}

          <h2 style={{ display: "flex", justifyContent: "space-between" }}>
            <span>TOTAL</span>
            <span>
              $
              {cartState.reduce(
                (sum, item) => sum + item.product.price * item.amount,
                0
              )}
            </span>
          </h2>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/checkout");
          }}
        >
          Continue
        </button>
      </Modal>
    </>
  );
};

export default CartComponentWithRedux;
