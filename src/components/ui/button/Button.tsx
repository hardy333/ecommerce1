import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./button.css";

type ButtonProps = {
  children: ReactNode;
  isLink: boolean;
  to: string;
  type?: "primary" | "secondary" | "link" | "dark";
};

const Button = ({
  children,
  to = "./",
  isLink = false,
  type = "primary",
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
    <button className={`btn btn-${type}`} type="button">
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
