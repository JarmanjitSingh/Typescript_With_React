import { useState } from "react";

const InputComp = () => {
    const [val, setVal] = useState<string>('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={(event) => handleInputChange(event)}
      />
    </div>
  );
};

export default InputComp;
