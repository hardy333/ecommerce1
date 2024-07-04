import classNames from "classnames";
import "./input.css";
import { HTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../pages/checkout/Checkout";

type InputProps = {
  type: string;
  isError?: boolean;
  placeholder?: string;
  label?: null | string;
  id?: string;
  errorMsg?: string;
  name?: string;
  checked?: boolean;
  register?: UseFormRegister<Inputs>;
} & HTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    {
      type = "text",
      placeholder = "",
      label = null,
      id = "",
      isError = false,
      errorMsg = "",
      checked,
      // register,
      ...props
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    if (type === "radio") {
      return (
        <div
          className={classNames({
            "radio-input-wrapper": true,
            error: isError,
          })}
        >
          <input
            ref={ref}
            {...props}
            type="radio"
            checked={checked}
            id={id}
            className={classNames({})}
          />
          {label ? <label htmlFor={id}>{label}</label> : null}
        </div>
      );
    }

    return (
      <>
        {/* <input className={`input ${isError ? "input-error" : ""}`} type={type} /> */}
        <div
          className={classNames({
            "input-wrapper": true,
            error: isError,
          })}
        >
          {label ? <label htmlFor={id}>{label}</label> : null}
          {isError ? (
            <p className="error-msg">
              <abbr title={errorMsg}>{errorMsg}</abbr>
            </p>
          ) : null}
          <input
            ref={ref}
            {...props}
            id={id}
            className={classNames({
              input: true,
            })}
            placeholder={placeholder}
            type={type}
          />
        </div>
      </>
    );
  }
);

export default Input;
