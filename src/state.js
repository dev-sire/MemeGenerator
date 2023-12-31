import react from "react";
import "./styles.css";
export default function State() {
  const [isImportant, setIsImportant] = react.useState(true);
  function stateHandler() {
    setIsImportant((prevState) => !prevState);
    setCount(0);
  }
  const [count, setCount] = react.useState(0);
  function countIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
  function countDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <main>
      <h1 className="--primary-heading">Is learning States important?</h1>
      <h3 className="--secondary-heading">
        {isImportant === true ? "YES" : "NO"}
      </h3>
      <h1 className="--primary-heading">Counter using States</h1>
      <div className="counter">
        <button className="counter--minus" onClick={countDecrement}>
          -
        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={countIncrement}>
          +
        </button>
      </div>
      <button className="--cta --default" onClick={stateHandler}>
        Toggle/Reset Values
      </button>
    </main>
  );
}
