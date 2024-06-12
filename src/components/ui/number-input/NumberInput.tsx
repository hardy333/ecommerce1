import "./number-input.css";

type Props = {
  number: number;
  setNumber: (num: number) => void;
  maxQuantity?: number;
};

const NumberInput = ({ number, setNumber, maxQuantity = 10000 }: Props) => {
  return (
    <div className="number-input-wrapper">
      <button onClick={() => setNumber(number === 0 ? number : number - 1)}>
        -
      </button>
      <span>{number}</span>
      <button
        onClick={() => setNumber(number === maxQuantity ? number : number + 1)}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
