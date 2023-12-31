import react from "react";
import "./styles.css";
export default function Joke(props) {
  const [shown, setShown] = react.useState(false);
  function toggleShown() {
    setShown((prevState) => !prevState);
  }
  return (
    <main>
      <div className="jk--container">
        {props.setup && <h3 className="jk--heading">{props.setup}</h3>}
        {shown && <p className="jk--punchline">{props.punchline}</p>}
        <button className="shown" onClick={toggleShown}>
          {shown ? "Hide" : "Show"} Punchline
        </button>
        <hr />
      </div>
    </main>
  );
}
