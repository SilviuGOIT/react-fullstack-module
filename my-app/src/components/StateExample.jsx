import { useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0); // count = 0

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount((stateBefore) => {
      // parametrul pe care il trimitem in callback funct din setState reprezinta state-ul care este in momentul de fata
      console.log(stateBefore);
      return stateBefore - 1;
    });
  };

  return (
    <div>
      <p>Contor: {count}</p>
      <button onClick={increaseCount}>Creste</button>
      <button onClick={decreaseCount}>Scade</button>
    </div>
  );
};

export default StateExample;
