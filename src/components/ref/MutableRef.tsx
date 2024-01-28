import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null >(null);

  const stoptimer = () => {
    if(intervalRef.current) window.clearInterval(intervalRef.current)
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return ()=>{
        stoptimer()
    }
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      Hook Timer - {timer}
      <button onClick={() => stoptimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
