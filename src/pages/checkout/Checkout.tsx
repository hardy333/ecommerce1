import { useState } from "react";
import CheckoutModal from "../../components/checkout-modal/CheckoutModal";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useForm } from "react-hook-form";

export type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: number;
  eMoneyPin?: number;
};

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cartState = useSelector((state: RootState) => state.cart.value);
  const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">(
    "e-money"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);

    setIsOpen(true);
  };

  console.log(errors);

  return (
    <main className="checkout">
      <div className="container checkout-container ">
        <div>
          <button className="btn-go-back" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="checkout-content">
          {/* Left Section/Form */}
          <section className="form-section">
            <div>
              <h1>CHECKOUT</h1>

              {/* Group 1 */}
              <section className="form-group">
                <h2>billing details</h2>
                <div className="form-group-inputs-container">
                  <Input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      minLength: {
                        value: 2,
                        message: "Your name must be more than two characters",
                      },
                    })}
                    isError={Boolean(errors.name)}
                    errorMsg={errors.name?.message}
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                  />
                  <Input
                    type="text"
                    label={"Email Adress"}
                    placeholder="Enter your email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Please enter valid email",
                      },
                    })}
                    isError={Boolean(errors.email)}
                    errorMsg={errors.email?.message}
                  />
                  <Input
                    type="number"
                    label={"Phone Number"}
                    placeholder="Enter your number"
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Please enter your number",
                      },
                    })}
                    isError={Boolean(errors.phoneNumber)}
                    errorMsg={errors.phoneNumber?.message}
                  />
                </div>
              </section>
              {/* Group 2 */}
              <section className="form-group form-group-shipping ">
                <h2>shipping info</h2>
                <div className="form-group-inputs-container">
                  <Input
                    type="text"
                    label={"Address"}
                    placeholder="Enter your address"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Please enter your address",
                      },
                    })}
                    isError={Boolean(errors.address)}
                    errorMsg={errors.address?.message}
                  />
                  <Input
                    type="text"
                    label={"Zip Code "}
                    placeholder="Enter your zip code"
                    {...register("zipCode", {
                      required: {
                        value: true,
                        message: "Please enter your zip code",
                      },
                      minLength: {
                        value: 4,
                        message: "Your zip code should be minimum 4 characters",
                      },
                    })}
                    isError={Boolean(errors.zipCode)}
                    errorMsg={errors.zipCode?.message}
                  />
                  <Input
                    type="text"
                    label={"City"}
                    placeholder="Enter your city"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "Please enter your city",
                      },
                    })}
                    isError={Boolean(errors.city)}
                    errorMsg={errors.city?.message}
                  />
                  <Input
                    type="text"
                    label={"Country"}
                    placeholder="Enter your country"
                    {...register("country", {
                      required: {
                        value: true,
                        message: "Please enter your country",
                      },
                    })}
                    isError={Boolean(errors.country)}
                    errorMsg={errors.country?.message}
                  />
                </div>
              </section>
              {/* Group 3 */}
              <section className="form-group form-group-payment ">
                <h2>payment details</h2>
                <div className="form-group-payment-container">
                  <p>Payment Method</p>
                  <div className="radio-input-container">
                    <Input
                      checked={paymentMethod === "e-money"}
                      type="radio"
                      label={"e-money"}
                      onChange={() => setPaymentMethod("e-money")}
                      name="payment-method"
                      // {...register("paymentMethod", {
                      //   required: {
                      //     value: true,
                      //     message: "Please enter your e money",
                      //   },
                      //   onChange: () => {
                      //     setPaymentMethod("e-money");
                      //   },
                      // })}
                      // isError={Boolean(errors.eMoneyNumber)}
                      // errorMsg={errors.eMoneyNumber?.message}
                    />
                    <Input
                      type="radio"
                      checked={paymentMethod === "cash"}
                      label={"Cash on Delivery"}
                      name="payment-method"
                      onChange={() => setPaymentMethod("cash")}
                      // {...register("paymentMethod", {
                      //   required: {
                      //     value: true,
                      //     message: "Please enter your e money",
                      //   },
                      //   onChange: () => {
                      //     setPaymentMethod("cash");
                      //   },
                      // })}
                      // isError={Boolean(errors.eMoneyNumber)}
                      // errorMsg={errors.eMoneyNumber?.message}
                    />
                  </div>
                </div>
              </section>
              {paymentMethod === "e-money" ? (
                <section className="form-group  ">
                  <div className="form-group-inputs-container">
                    <Input
                      type="number"
                      label={"E money number"}
                      placeholder="38393"
                      {...register("eMoneyNumber", {
                        required: {
                          value: true,
                          message: "Please enter your e money",
                        },
                      })}
                      isError={Boolean(errors.eMoneyNumber)}
                      errorMsg={errors.eMoneyNumber?.message}
                    />
                    <Input
                      type="number"
                      label={"e-money PIN "}
                      placeholder="34334534 "
                      {...register("eMoneyPin", {
                        required: {
                          value: true,
                          message: "Please enter your eMoneyPin",
                        },
                      })}
                      isError={Boolean(errors.eMoneyPin)}
                      errorMsg={errors.eMoneyPin?.message}
                    />
                  </div>
                </section>
              ) : (
                <footer>
                  <img src="" alt="" />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </footer>
              )}
            </div>
          </section>

          {/* Right Aside/ Product List */}
          <aside className="aside-section">
            <h2>summary</h2>

            <div className="summery-item-container">
              {/* 1 */}
              {cartState.map((item) => {
                return (
                  <div className="summery-item">
                    <img className="checkout-summery-img" alt="" />
                    <div className="summery-item-info">
                      <p className="checkout-summery-name">
                        {item.product.name.split(" ").slice(0, -1).join(" ")}
                      </p>
                      <p className="checkout-summery-price">
                        $ {item.product.price}
                      </p>
                    </div>
                    <p className="checkout-summery-amount">x{item.amount}</p>
                  </div>
                );
              })}
            </div>

            <footer className="checkout-summery-footer">
              {/* 1 */}
              <div className="checkout-info-row">
                <p>TOTAL</p>
                <p>333</p>
              </div>
              {/* 2 */}
              <div className="checkout-info-row">
                <p>TOTAL</p>
                <p>32332</p>
              </div>
              {/* 3 */}
              <div className="checkout-info-row">
                <p>TOTAL</p>
                <p>23</p>
              </div>
              {/* 4 */}
              <div className="checkout-info-row">
                <p>TOTAL</p>
                <p>232</p>
              </div>
              <Button variant="primary">Continue</Button>
              {/* <button>Continue</button> */}
            </footer>
          </aside>
        </form>
      </div>

      <CheckoutModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default Checkout;
