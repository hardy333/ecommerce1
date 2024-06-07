import classNames from "classnames";
import "./input.css";

type InputProps = {
  type: string;
  isError?: boolean;
  placeholder?: string;
  label?: null | string;
  id?: string;
};

const Input = ({
  type = "text",
  isError = false,
  placeholder = "",
  label = null,
  id = "",
}: InputProps) => {
  if (type === "radio") {
    <div>
      <input
        type="radio"
        id={id}
        className={classNames({
          "input-error": isError,
        })}
      />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </div>;
  }

  return (
    <>
      {/* <input className={`input ${isError ? "input-error" : ""}`} type={type} /> */}
      <div className="input-wrapper">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          id={id}
          className={classNames({
            input: true,
            "input-error": isError,
          })}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
