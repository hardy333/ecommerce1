import { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./button.css";

// const func1 = (num1: number, num2: number, ...numbers: number[]) => {
//   // console.log(num1 + num2 + num3);
//   console.log(num1, num2, numbers);
// };

// const arr = [1, 2, 3, 4, 4, 44, 4332];

// func1(...arr);

type ButtonProps = {
  children: ReactNode;
  isLink?: boolean;
  to?: string;
  type?: "primary" | "secondary" | "link" | "dark";
} & HTMLAttributes<HTMLButtonElement> &
  HtmlHTMLAttributes<HTMLLinkElement>;

const Button = ({
  children,
  to = "./",
  isLink = false,
  type = "primary",
  ...props
}: ButtonProps) => {
  const content = (
    <>
      {children}
      {type === "link" ? <ArrowSvg /> : null}
    </>
  );

  return isLink ? (
    <Link className={`btn btn-${type}`} to={to}>
      {content}
    </Link>
  ) : (
    <button {...props} className={`btn btn-${type}`} type="button">
      {content}
    </button>
  );
};

const ArrowSvg = () => {
  return (
    <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.322 1l5 5-5 5"
        stroke="var(--color-primary)"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Button;
