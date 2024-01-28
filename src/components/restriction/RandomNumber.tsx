type RandomNumber = {
  value: number;
};

type PositiveNumber = RandomNumber & {
  // this & is for it will include all types of random number
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumber & {
  isPositive?: boolean;
  isNegative: never;
  isZero?: never;
};

type ZeroNumber = RandomNumber & {
  isPositive?: boolean;
  isNegative?: never;
  isZero: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
